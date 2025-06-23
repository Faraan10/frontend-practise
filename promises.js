// A Promise in JavaScript represents a value that may be available now, later,
//  or never. It's used to handle asynchronous operations like API calls,
// file reading etc, it returns a promise which is either fullfilled or rejected

// The Promise immediately goes into a fulfilled or rejected state.
// I then use .then() to handle the success, and .catch() to handle any error

const promise = new Promise((resolve, reject) => {
  const success = true;

  success ? resolve("Done") : reject("Failed");
});

console.log(promise);

promise.then((res) => console.log(res)).catch((err) => console.log(err));

const data = fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((res) => console.log(res))
  .catch((err) => console.log("Error", err));

console.log(data);
