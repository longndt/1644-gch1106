var express = require('express');
const StudentModel = require('../models/StudentModel');
var router = express.Router();

router.get('/add', (req, res) => {
  res.render('add')
})

router.post('/add', async (req, res) => {
  //get data from form
  var student = req.body;
  //add form data to db
  await StudentModel.create(req.body);
  console.log('Add new student succeed !');
  //redirect to student list
  res.redirect('/');
})

router.get('/', async (req, res) => {
  var students = await StudentModel.find({});
  console.log(students);
  //res.send(students);
  res.render("students", { students });
})

router.get('/input', (req, res) => {
  res.render('input')
})

//receive and process data from form (client-side)
router.post('/input', (req, res) => {
  //req.body : get data from form
  var data = req.body;
  var name = data.name;
  console.log(data);
  res.send("<h1>Hello " + name + ". You are " + data.age + " years old </h1>");
})

router.get('/hello/:name/:age', (req, res) => {
  //req.body : get data from url
  var data = req.params;
  res.send("<h1>Hello " + data.name + ". You are " + data.age + " </h1>");
})

module.exports = router;
