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

module.exports = {
  similarItemsRequest: similarItemsRequest
}