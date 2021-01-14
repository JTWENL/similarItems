const mongoose = require('mongoose');
const PORT = process.env.PORT || 8080;

mongoose.connect(`mongodb://localhost:jtwenl/`, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', ()=> {
  console.log('connected to mongodb');
});


