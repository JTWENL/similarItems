const axios = require('axios');

let similarItemsRequest = (col, value) => {
  return axios.get(`http://localhost:8080/similar/${col}/${value}`)
    .then(data => {return data.data})
    .catch(err => {
      if (err.response) {
        return err.response;
      } else {
        return 'No Matches Found';
      }
    })
}

let sampleData =   {
  "carouselImages": {
      "main": "http://placeimg.com/640/480/nightlife",
      "hover": "http://placeimg.com/640/480/transport"
  },
  "_id": "6001ef57d7fa290d20b57b8b",
  "itemID": "1qy8r2nyg3cvyboevh5183mpt",
  "category": "Tools",
  "shortDescription": "tan",
  "price": 40,
  "reviews": 246,
  "averageRating": 3,
  "thumbImageURL": "http://placeimg.com/640/480/nature",
  "variants": false,
  "liked": false,
  "isSale": true,
  "isFresh": true,
  "name": "Robust Granit Bord",
  "__v": 0
}

module.exports = {
  similarItemsRequest: similarItemsRequest,
  sampleData: sampleData
}