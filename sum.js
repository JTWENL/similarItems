let sum = (a,b) => {
  return a + b
};

let add5 = (num) => {
  return sum(5, num);
}



module.exports = {
  sum: sum,
  add5: add5,
}