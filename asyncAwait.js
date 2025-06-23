// It allows you to write asynchronous code that looks synchronous,
// making it easier to read and debug.

async function getData() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("Error fetching data:", err);
  }
}

getData();

// The fetch call waits (await) until it resolves.

// Then the .json() response also waits.

// No .then() or .catch() chaining required — cleaner and more readable.

// async/await helps in writing async code in a way that’s easier to understand
//  and debug. It’s built on top of Promises, and helps avoid deeply nested
//  .then() chains — especially useful in API-heavy frontend apps."
