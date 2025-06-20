const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  verified: { type: Boolean, default: false },
  verificationToken: { type: String },
  role: { type: String, enum: ["user", "admin"], default: "user" },
  sound_settings: {
    cicadas: Number,
    fire: Number,
    wind: Number,
    rain: Number,
    birds: Number,
  },
  character: String,
  animal: String,
  music_settings: {
    track: {
      track1: String,
      track2: String,
      track3: String,
    },
    volume:Number
  },
  level: Number,
  exp: Number,
  tasks: Array,
  settings: {
    location: String,
    time_format: String,
  },
  signupDate: { type: Date, default: Date.now }, // <-- new
  lastLogin: { type: Date },  
});

module.exports = mongoose.model("User", UserSchema);
