console.log("hello");

// this below will give an error as let is block scoped
// let a = 10;
// function test() {
//   console.log(a);
//   let a = 5;
// }
// test();

const data = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const resJson = await response.json();
    console.log(resJson);
  } catch (err) {
    console.log("Error", err);
  }
};

data().then((res) => console.log(res));
