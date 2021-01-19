const axios = require('axios');
import {sampleDataCategory, sampleDataSale} from './SampleAPIData.js';

let apiRequest = (col, value) => {
  return axios.get(`http://localhost:8080/similar/${col}/${value}`)
    .then(data => {return data.data})
    .catch(err => {console.log(err)})
};


test('api request to /similar/category/Tools should return array of docs where each category property is equal to Tools', () => {
  sampleDataCategory.forEach(doc => {
    expect(doc.category).toBe('Tools');
  })
})


test('api request to /similar/isSale/true should return array of docs where each isSale property is equal to true', () => {
  sampleDataSale.forEach(doc => {
    expect(doc.isSale).toBe(true);
  })
})












