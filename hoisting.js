//HOISTING
// JavaScript moves declarations to the top of the scope during compilation,
// before running the code.

// “All variables are hoisted, but only var is initialized to undefined.
// let and const exist in the Temporal Dead Zone — if you try to access them
// before their declaration, you get a ReferenceError.”

// prints undefined
console.log(a);
var a = 5;

// referenceError cannot access b before initialization
console.log(b);
let b = 10;

// referenceError cannot access c before initialization
console.log(c);
let c = 20;
