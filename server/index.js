const express = require('express');
const app = express();
const db = require('../db');
const path = require('path');
const PORT = process.env.PORT || 8080
app.use(express.static('dist'));

app.listen(PORT, ()=> {
  console.log(`listening on ${PORT}`);
})


/**
 * This is a description for the servers only enpoint
 * @async api Endpoint
 *
 * @param {string} col - req parameter representing the column name for the database query
 * @param {string} value - req parameter representing the value used by the db query to choose similar items
 *
 * @returns {[Object]} - returns an array of documents who are similar based on the given req params
 *
*/


app.get('/similar/:col/:value', (req, res) => {
  //endpoint receives strings from req params
  let col = req.params.col;
  let value = req.params.value;

  //string corresponds to a column and value in db documents
  //make query to db
    //db query will respond with all documents where property matches given key
});

