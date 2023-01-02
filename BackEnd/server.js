//server.js
const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//cors
const cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Serve the static files from the Todo app
//build project
const path = require('path');
app.use(express.static(path.join(__dirname, '../build'))); //build location
app.use('/static', express.static(path.join(__dirname, 'build//static')));

//mongodb+srv://admin:<password>@cluster0.oiviaxb.mongodb.net/?retryWrites=true&w=majority
const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb+srv://admin:admin@cluster0.oiviaxb.mongodb.net/?retryWrites=true&w=majority'); //Database connection. Asychronous call
}

//Defined schema 
const planSchema = new mongoose.Schema({
  task: String,
  description: String,
  priorty: String,
  day: String,
  time: String
});

const planModel = mongoose.model('plans', planSchema); //planModel allow interaction with database.

//a post method to add todo plan
app.post('/api/plans', (req, res) => {
  console.log(req.body);
  //create records in database
  planModel.create({
    task: req.body.task,
    description: req.body.description,
    priorty: req.body.priorty,
    day: req.body.day,
    time: req.body.time
  }).then(()=>{res.status(201).send('Data received');}) //successful requset with response
  .catch((error)=>{res.status(500).send(error)}) //catch error
  //res.send('Data received');
})


// a  route point that find plans and gets it to display 
app.get('/api/plans', (req, res) => {
  planModel.find((error, data) => {
    res.json(data);
  })
})

//a  route point that pass an id and reads a plan by id from the database.
app.get('/api/plans/:id', (req, res) => {
  console.log(req.params.id);

  planModel.findById(req.params.id, (error, data) => {
    res.json(data);
  })
})

//listen request to changes in plans by id
//override the record
app.put('/api/plan/:id', (req, res) => {
  console.log("Update: " + req.params.id);
  console.log(req.body);
  planModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, data) => { res.send(data); })
})

//a  route point that returns planner information by id
app.get('/api/plan/:id', (req, res) => {
  console.log(req.params.id);
  planModel.findById(req.params.id, (error, data) => { res.json(data); })
})

//listen for delete method
app.delete('/api/plan/:id', (req, res) => {
  console.log("Deleting: " + req.params.id); //output deleted plan id to console

  //find plan by id to delete
  //go to database to find id and delete 
  planModel.findByIdAndDelete({ _id: req.params.id }, (error, data) => {
    res.json(data); //send back some data
  })
})

// Handles any requests that don't match the ones above
//For all the routes not specified above, send back a file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../build/index.html'));
});

//connect to port 4000
app.listen(port, () => {
  console.log(`Server listening on port 4000`)
})