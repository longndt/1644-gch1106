var express = require('express');
const StudentModel = require('../models/StudentModel');
var router = express.Router();

router.get('/', async (req, res) => {
  var students = await StudentModel.find({});
  console.log(students);
  //res.send(students);
  res.render("students", { students });
})

module.exports = router;
