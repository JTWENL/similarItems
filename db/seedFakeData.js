const faker = require('faker')
const mongoose = require('mongoose');
const db = require('./index.js');



let seedDatabase = () => {
  let fakeDataArr = [];

  for (let i = 0; i < 100; i++) {
    faker.locale = "en";
    let fakeDataObj = {
      itemID: faker.random.alphaNumeric(25),
      category: faker.commerce.department(),
      shortDescription: faker.commerce.color(),
      price: faker.random.number(1000),
      reviews: faker.random.number(500),
      averageRating: faker.random.number(5),
      thumbImageURL: faker.image.image(),
      carouselImages: {
        main: faker.image.image(),
        hover: faker.image.image()
      },
      variants: faker.random.boolean(),
      liked: faker.random.boolean(),
      isSale: faker.random.boolean(),
      isFresh: faker.random.boolean(),
    }

    faker.locale = "sv";
    fakeDataObj.name = faker.commerce.productName();
    fakeDataArr.push(fakeDataObj);
  }
  let result = fakeDataArr.map((fakeDataObj) => {
    let doc = new db.Product(fakeDataObj);
    return doc.save();
  })
  return Promise.all(result);
}

seedDatabase()
.then(() => {
  console.log('success')
})
.catch((error) => {
  console.log(error);
})
