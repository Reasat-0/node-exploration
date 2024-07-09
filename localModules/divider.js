const divider = (a, b) => {
  return a > b ? a / b : `${a} should be greater than ${b}`;
};

// let result = divider(2, 1);
// console.log(result);

module.exports = divider;
