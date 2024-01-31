const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  companyName: {
    type: String,
    trim: true,
  },
  companyUrl: {
    type: String,
    trim: true,
  },
  link: {
    type: String,
    trim: true,
  },
  location: {
    type: String,
    trim: true,
  },
  postedOn: Date,
  skills: {
    type: [String],
    trim: true,
  },
  title: {
    type: String,
    trim: true,
  },
  type: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("Job", jobSchema);
