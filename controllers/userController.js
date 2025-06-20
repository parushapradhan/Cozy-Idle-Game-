const User = require("../models/User");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");

// GET /
exports.index = (req, res) => {
  if (!req.session.user) return res.redirect("/login");
  res.render("pages/index", { user: req.session.user });
};

exports.signupForm = (req, res) => res.render("pages/signup");
exports.loginForm = (req, res) => res.render("pages/login");
exports.forgotPasswordForm = (req, res) => res.render("pages/forgotPassword");

// POST /signup
exports.signupUser = async (req, res) => {
  const { username, email, password, adminCode } = req.body; // 👈 now reading adminCode too
  console.log("📥 Received signup form:", req.body);

  try {
    const existing = await User.findOne({ username });
    if (existing)
      return res.render("pages/login", {
        errorMessage: "User already Exists!",
      });

    const token = crypto.randomBytes(32).toString("hex");
    const hashedPassword = await bcrypt.hash(password, 10);

    // 👇 Check adminCode against secret
    let role = "user";

    if (adminCode && adminCode === process.env.ADMIN_CODE) {
      role = "admin";
    }

    const newUser = new User({
      username,
      password: hashedPassword,
      email,
      verified: false,
      verificationToken: token,
      signupDate: new Date(),   
      role, // 👈 role will be "user" or "admin"
      sound_settings: {
        cicadas: 50,
        fire: 10,
        wind: 0,
        rain: 0,
        birds: 100,
      },
      character: "wizard",
      animal: "dozy",
      level: 1,
      exp: 0,
      music_settings: {
        track: { track1: "off", track2: "on", track3: "on" },
        tasks: [],
      },
      settings: {
        location: "bedroom",
        time_format: "24hrs",
      },
    });

    await newUser.save();

    const verificationLink = `http:/zigzag-cut-olivine.glitch.me/verify-email?token=${token}`;
    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: parseInt(process.env.MAILTRAP_PORT),
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
      },
    });

    await transporter.sendMail({
      from: "no-reply@cozy.com",
      to: email,
      subject: "Verify your account",
      html: `<p>Click <a href="${verificationLink}">here</a> to verify your email.</p>`,
    });

    return res.render("pages/login", {
      errorMessage: "Verification Link sent, check Inbox!",
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
};

exports.verifyUser = async (req, res) => {
  const { token } = req.query; // 👈 NOT req.params
  console.log("🔎 Received token:", token);

  try {
    const user = await User.findOne({ verificationToken: token });
    if (!user) {
      return res.render("pages/login", {
        errorMessage: "Invalid or Expired Token!",
      });
    }

    user.verified = true;
    user.verificationToken = undefined;
    await user.save();
    console.log("✅ User verified:", user.username);

    res.render("pages/verifySuccess", { username: user.username });
  } catch (err) {
    console.error("Verification error:", err);
    res.status(500).send("Something went wrong during verification.");
  }
};

// POST /login
exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.render("pages/login", {
        errorMessage: "❌ Invalid Username!",
      });
    }

    if (!user.verified) {
      return res.render("pages/login", {
        errorMessage: "🚫 Please verify your email before logging in!",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.render("pages/login", {
        errorMessage: "❌ Invalid Password!",
      });
    }

    // ✅ Update lastLogin timestamp
    user.lastLogin = new Date();
    await user.save(); // 👈 save the updated lastLogin

    req.session.user = user;

    // ✅ After successful login: Redirect based on role
    if (user.role === "admin") {
      res.redirect("/admin");
    } else {
      res.redirect("/");
    }
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).send("Something went wrong");
  }
};


// POST /forgotPassword
exports.forgotPasswordSubmit = async (req, res) => {
  const { username } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      // If user not found, stay on login page with error
      return res.render("pages/login", {
        errorMessage: "❌ Username not found!",
      });
    }

    // Save their user ID in session for resetting later
    req.session.resetUser = user._id;

    // Render the reset password page
    res.render("pages/resetPassword");
  } catch (err) {
    console.error("Forgot password error:", err);
    res.status(500).send("Server error during password reset process");
  }
};
exports.resetPasswordSubmit = async (req, res) => {
  const { newPassword } = req.body;
  const userId = req.session.resetUser;

  if (!userId) {
    return res
      .status(400)
      .send("Session expired. Please try Forgot Password again.");
  }

  try {
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await User.findByIdAndUpdate(userId, { password: hashedPassword });

    // Clear the session
    req.session.resetUser = null;

    res.render("pages/login", {
      errorMessage: "✅ Password successfully reset! Please log in.",
    });
  } catch (err) {
    console.error("Password reset error:", err);
    res.status(500).send("Failed to reset password");
  }
};

exports.logoutUser = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("❌ Error destroying session:", err);
      return res.status(500).send("Could not log out");
    }
    res.clearCookie("connect.sid");
    res.redirect("/login");
  });
};

// ADMIN
exports.adminPanel = async (req, res) => {
  try {
    if (req.session.user?.role !== "admin")
      return res.status(403).send("Access denied");

    const users = await User.find();
    res.render("pages/admin", { users });
  } catch (err) {
    console.error("Error loading admin panel:", err);
    res.status(500).send("Server error");
  }
};

exports.deleteUser = async (req, res) => {
  try {
    if (req.session.user?.role !== "admin")
      return res.status(403).send("Access denied");

    await User.deleteOne({ email: req.body.email });
    res.redirect("/admin");
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).send("Could not delete user");
  }
};

exports.removeTask = async (req, res) => {
  const { email, task } = req.body;

  try {
    if (req.session.user?.role !== "admin")
      return res.status(403).send("Access denied");

    await User.updateOne(
      { email },
      { $pull: { "music_settings.tasks": { task_name: task } } }
    );
    res.redirect("/admin");
  } catch (err) {
    console.error("Remove task error:", err);
    res.status(500).send("Failed to remove task");
  }
};
exports.updateLevel = async (req, res) => {
  const { email, level } = req.body;

  try {
    if (req.session.user?.role !== "admin")
      return res.status(403).send("Access denied");

    console.log("Trying to update level for:", email, "to level:", level);

    const result = await User.updateOne(
      { email },
      { $set: { level: parseInt(level, 10) } }
    );

    console.log("MongoDB Update Result:", result);

    if (result.modifiedCount === 0) {
      console.warn("⚠️ No user updated — maybe wrong email?");
    }

    res.redirect("/admin");
  } catch (err) {
    console.error("Update level error:", err);
    res.status(500).send("Failed to update level");
  }
};

exports.updateSettings = async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ error: "Not logged in" });
  }

  try {
    const updatedFields = req.body;
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.session.user._id },
      { $set: updatedFields },
      { new: true }
    );
    req.session.user = updatedUser;
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.resetDetailsForm = (req, res) => {
  if (!req.session.user) {
    return res.redirect("/login");
  }

  const flash = req.session.flash;
  delete req.session.flash;

  res.render("pages/resetDetails", { flash });
};

exports.resetDetailsSubmit = async (req, res) => {
  const { username, email, newPassword } = req.body;

  if (!req.session.user) {
    return res.redirect("/login");
  }

  try {
    const currentUser = await User.findById(req.session.user._id);
    if (!currentUser) {
      req.session.flash = { type: "error", message: "User not found." };
      return res.redirect("/resetDetails");
    }

    const updateFields = {};

    // Check if username is changed and unique
    if (username && username !== currentUser.username) {
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        req.session.flash = {
          type: "error",
          message: "Username already taken.",
        };
        return res.redirect("/resetDetails");
      }
      updateFields.username = username;
    } else if (username && username === currentUser.username) {
      req.session.flash = {
        type: "error",
        message: "New username must be different from old username.",
      };
      return res.redirect("/resetDetails");
    }

    // Check if new password is different
    if (newPassword) {
      const isSamePassword = await bcrypt.compare(
        newPassword,
        currentUser.password
      );
      if (isSamePassword) {
        req.session.flash = {
          type: "error",
          message: "New password must be different from old password.",
        };
        return res.redirect("/resetDetails");
      }
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      updateFields.password = hashedPassword;
    }

    if (email && email.trim() !== "") {
      // Validate email format only if user entered something
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        req.session.flash = {
          type: "error",
          message: "Please enter a valid email address!",
        };
        return res.redirect("/resetDetails");
      }
      updateFields.email = email;
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.session.user._id,
      { $set: updateFields },
      { new: true }
    );

    req.session.user = updatedUser;
    req.session.flash = {
      type: "success",
      message: "✅ Details updated successfully!",
    };
    res.redirect("/");
  } catch (err) {
    console.error("Reset details error:", err);
    req.session.flash = { type: "error", message: "Something went wrong!" };
    res.redirect("/resetDetails");
  }
};

exports.resetSettings = async (req, res) => {
  const { userId } = req.body;
  try {
    await User.findByIdAndUpdate(userId, {
      sound_settings: { cicadas: 50, fire: 10, wind: 0, rain: 0, birds: 100 },
      settings: { location: "bedroom", time_format: "24hrs" },
      character: "wizard",
      animal: "dozy",
      music_settings: {
        track: { track1: "off", track2: "on", track3: "on" },
        tasks: [],
      },
    });
    res.redirect("/admin");
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to reset settings");
  }
};


exports.forceResetPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const tempPassword = crypto.randomBytes(4).toString("hex"); // simple temp password
    const hashedPassword = await bcrypt.hash(tempPassword, 10);

    await User.updateOne({ email }, { $set: { password: hashedPassword } });

    // Send email
    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: parseInt(process.env.MAILTRAP_PORT),
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
      },
    });

    await transporter.sendMail({
      from: "no-reply@cozytodo.com",
      to: email,
      subject: "Password Reset Request",
      html: `<p>Hello,<br/> Your temporary password is <strong>${tempPassword}</strong>.<br/>Please log in and change your password immediately.</p>`,
    });

    res.redirect("/admin");
  } catch (err) {
    console.error("Force reset password error:", err);
    res.status(500).send("Failed to reset password");
  }
};