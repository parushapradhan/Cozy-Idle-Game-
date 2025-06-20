const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const path = require("path");
const User = require("./models/User");
const userRoutes = require("./routes/userRoutes");
const taskRoutes = require('./routes/taskRoutes');
const adminRoutes = require("./routes/adminRoutes");
require("dotenv").config();

const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(
  session({
    secret: `${process.env.SECRET_KEY}`,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);
app.use("/", userRoutes);
app.use('/', taskRoutes);
// Connect to MongoDB (even though we're not using it yet)
app.use("/", adminRoutes); // or use a prefix like '/admin' if you want
mongoose
  .connect(`${process.env.DB_URI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error(err));


app.use(express.urlencoded({ extended: true }));

app
  .listen(8080, () => {
    console.log("🚀 Server is running at http://localhost:8080");
  })
  .on("error", (err) => {
    console.error("❌ Server failed to start:", err);
  });
