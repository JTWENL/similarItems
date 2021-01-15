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
 * @param {string} category - req parameter representing the column name for the database query
 * @param {string} key - req parameter representing the value used by the db query to choose similar items
 *
 * @returns {[Object]} - returns an array of documents who are similar based on the given req params
 *
*/


app.get('/similar/:category/:key', (req, res) => {
  //endpoint receives strings from req params
  //string corresponds to a key in db documents
  //make query to db
    //db query will respond with all documents where property matches given key
});

