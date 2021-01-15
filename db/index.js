const mongoose = require('mongoose');
mongoose.Promise = Promise;
const PORT = process.env.PORT || 8080;

mongoose.connect(`mongodb://localhost:27017/jtwenl`, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', ()=> {
  console.log('connected to mongodb');


});


const productSchema = new mongoose.Schema({
  itemID: {type: String, required: true},
  category: {type: String, required: true},
  shortDescription: {type: String, required: true},
  price: {type: Number, required: true},
  reviews: {type: Number, required: true},
  averageRating: {type: Number, required: true},
  thumbImageURL: {type: String, required: true},
  carouselImages: {
    main: {
      type: String,
      required: true
    },
    hover: {
      type: String,
      required: true
    }
  },
  variants: {type: Boolean, required: true},
  liked: {type: Boolean, required: true},
  isSale: {type: Boolean, required: true},
  isFresh: {type: Boolean, required: true},
  name: {type: String, required: true},
});

const Product = mongoose.model('product', productSchema)


module.exports = {
  Product: Product
}