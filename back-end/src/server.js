const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0-lfmbb.mongodb.net/be-the-hero`, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('Server is running on port 3333');
});