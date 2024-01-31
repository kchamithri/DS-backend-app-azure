var express = require("express");
var Job = require("../models/job");

var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  Job.find()
    .then((jobs) => {
      console.log(`Total jobs: ${jobs}`);
      res.json({ jobs: jobs });
    })
    .catch((err) => {
      console.log(err);
      res.send("Sorry! Something went wrong.");
    });
});

router.post("/addJob", function (req, res, next) {
  // Extract values from the request body
  const {
    companyName,
    companyUrl,
    link,
    location,
    postedOn,
    skills,
    title,
    type,
  } = req.body;

  // Create a new Job instance with the extracted values
  const newJob = new Job({
    companyName,
    companyUrl,
    link,
    location,
    postedOn,
    skills,
    title,
    type,
  });

  newJob
    .save()
    .then(() => {
      console.log("Job added successfully");
      res.redirect("/"); // Redirect to the home page or wherever you want
    })
    .catch((err) => {
      console.log(err);
      res.send("Sorry! Something went wrong.");
    });
});

// router.post("/completeTask", function (req, res, next) {
//   console.log("I am in the PUT method");
//   const taskId = req.body._id;
//   const completedDate = Date.now();

//   Task.findByIdAndUpdate(taskId, { completed: true, completedDate: Date.now() })
//     .then(() => {
//       console.log(`Completed task ${taskId}`);
//       res.redirect("/");
//     })
//     .catch((err) => {
//       console.log(err);
//       res.send("Sorry! Something went wrong.");
//     });
// });

// router.post("/deleteTask", function (req, res, next) {
//   const taskId = req.body._id;
//   const completedDate = Date.now();
//   Task.findByIdAndDelete(taskId)
//     .then(() => {
//       console.log(`Deleted task $(taskId)`);
//       res.redirect("/");
//     })
//     .catch((err) => {
//       console.log(err);
//       res.send("Sorry! Something went wrong.");
//     });
// });

module.exports = router;
