const express = require('express');
const axios = require('axios');

// Get express, instantiate express.
const app = express();
app.use(express.json());

// Create endpoints ie resources
app.get('/api/1/courses', async(req, res) => {
  const url = 'http://localhost:3000/courses';
  const {data} = await axios.get(url);
  res.status(200).json(data);

});

app.get('/api/1/courses/:id', async (req, res) => {
  const param = req.params.id;
  const url = `http://localhost:3000/courses/${param}`;
  const { data } = await axios.get(url);
  res.status(200).json(data);
});

app.post('/api/1/courses', async(req, res) => {
  const url = 'http://localhost:3000/courses';
  const body = req.body;
  const { data } = await axios.post(url, body);
  res.status(201).json(data);

});

const PORT = 5020;

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));