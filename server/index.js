const express = require('express');
const app = express();
const db = require('../db');
const path = require('path');
const PORT = process.env.PORT || 8080
app.use(express.static('dist'));

app.listen(PORT, ()=> {
  console.log(`listening on ${PORT}`);
})

