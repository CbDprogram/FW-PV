const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');
const users = require('./routes/Users');

const app = express();


// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
  .connect(db, { 
    useNewUrlParser: true,

  }) // Adding new mongo url parser
  .then(() => console.log('MongoDB Connected Succsesfully'))
  .catch(err => console.log(err));

//Routes
app.use('/api/items', items);
app.use('/api/users', users);





const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));