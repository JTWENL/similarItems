const faker = require('faker');

// let fakeObj = {
//   itemID: string,
//   articleNumber: string,
//   name: string,
//   category: string,
//   shortDescription: string,
//   price: number,
//   reviews: number,
//   averageRating: number,
//   thumbImageURL: string,
//   carouselImages: Array of objects[string(url)],
//   variants: Array of Objects (name, string(imageURL), string(link URL),
//   liked: boolean,
//   isSale: boolean,
//   isNew: boolean

// }

//faker.locale = "sv";

let seedDatabase = () => {
  let fakeDataArr = [];

  for (let i = 0; i < 3; i++) {
    faker.locale = "en";
    let fakeDataObj = {
      itemID: faker.random.alphaNumeric(25),
      category: faker.commerce.department(),
      shortDescription: faker.commerce.color(),
      price: faker.random.number(1000),
      reviews: faker.random.number(500),
      averageRating: faker.random.number(5),
      thumbImageURL: faker.image.image(),
      carouselImages: [faker.image.image(), faker.image.image()],
      variants: faker.random.boolean(),
      liked: faker.random.boolean(),
      isSale: faker.random.boolean(),
      isNew: faker.random.boolean(),
    }

    faker.locale = "sv";
    fakeDataObj.name = faker.commerce.productName();
    fakeDataArr.push(fakeDataObj);
    console.log(fakeDataObj);
  }
  result.map((fakeDataObj) => {
    //insert into db query here
  })
}

seedDatabase();