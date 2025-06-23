// these are common array methods also called as
// Higher Order Functions (HOF)

// A higher-order function is a function that takes another function as
// an argument or returns a function.
// Because they accept a callback function as an argument — and that
// function is applied to each element of the array.

data = [1, 2, 3];

const updated = data.map((item) => item * 2);
console.log(updated);

const filterData = [5, 10, 15];

const updatedList = filterData.filter((item) => item > 8);
console.log(updatedList);

const sumValues = [10, 20, 30];

const sum = sumValues.reduce((acc, value) => {
  let val = acc + value;
  return val;
}, 0);

console.log(sum);
