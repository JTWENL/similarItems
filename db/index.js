const mongoose = require('mongoose');
mongoose.Promise = Promise;
const PORT = process.env.PORT || 8080;

mongoose.connect(`mongodb://localhost:27017/jtwenl`, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', ()=> {
  console.log('connected to mongodb');


});

/**
 * Product document for products collection (similarItems service db)
 * @class Products
 * @prop {string} itemID - 25char alphanumeric string
 * @prop {string} category - product category
 * @prop {string} shortDescription - product description (color)
 * @prop {number} price - number between 0-1000
 * @prop {number} reviews - number of reviews between 0-500
 * @prop {number} averageRating - number between 0 and 5
 * @prop {string} thumbImageURL - url for product image
 * @prop {object} carouselImages - main and hover properties
 * @prop {string} main - carouselImages property, image url
 * @prop {string} hover - carouselImages property, image url
 * @prop {boolean} variants - boolean value represents if product has variants
 * @prop {boolean} liked - boolean value represents if product is liked by user
 * @prop {boolean} isSale- boolean value represents if product is on sale
 * @prop {boolean} isFresh - boolean value represents if product is a new product
 * @prop {string} name - product name
 */

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


/**
 * Describes the db query function
 * @async querySimilar
 * @param {string} col - represents the column name for query to search
 * @param {string} value - represents the value for the query to match against
 * @return {[Objects]} - an array of document objects whose properties match the desired values at the specific column
 */

querySimilar = (queryObj) => {
  return Product.find(queryObj)
    .then(res => {return res})
    .catch(err => {console.log(err)});
}


module.exports = {
  Product: Product,
  querySimilar: querySimilar
}