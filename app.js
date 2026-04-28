const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://mongo:27017/testdb')
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send("🚀 DevOps Compose App Running");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});