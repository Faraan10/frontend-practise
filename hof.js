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
