//--------------------Rest Api-------------------
//after we make NodeJS setup we write code for connect the Rest api with react application here in server.js and in CoursesList.jsx(for this app).
//and to run the app as required we should run 4steps in terminal:-
//1-json-server --watch courses-api.json
//2-npm run dev
//3-npm start (in anothrt browser,so choose yes)
//4-npm i cors
//-------------------------------------------------
const express = require('express');
const cors = require('cors');
const axios = require('axios');

// Get express, instantiate express.
const app = express();
app.use(cors());
app.use(express.json());

// Create endpoints ie resources
//create get endpoint to display all courses (all data)
app.get('/api/1/courses', async(req, res) => {
  const url = 'http://localhost:3000/courses';
  const {data} = await axios.get(url);
  res.status(200).json(data);

});
//create get endpoint to display specific course with specific id.
app.get('/api/1/courses/:id', async (req, res) => {
  const param = req.params.id;
  const url = `http://localhost:3000/courses/${param}`;
  const { data } = await axios.get(url);
  res.status(200).json(data);
});
//create post endpoint to add new course(new data)
app.post('/api/1/courses', async(req, res) => {
  const url = 'http://localhost:3000/courses';
  const body = req.body;
  const { data } = await axios.post(url, body);
  res.status(201).json(data);

});

const PORT = 5020;

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));