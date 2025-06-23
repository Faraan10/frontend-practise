// The Event Loop is the mechanism that allows JavaScript to handle
// asynchronous operations like setTimeout, fetch, or DOM events non-blockingly,
//  despite being single-threaded.

// The Event Loop manages execution by moving tasks from the queue to the call
//  stack when it's empty.

console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

// output
// Start
// End
// Promise
// Timeout

// Explanation:
// console.log("Start") → sync → prints first.

// setTimeout(..., 0) → goes to Macrotask Queue

// Promise.then() → goes to Microtask Queue

// console.log("End") → sync → prints

// After sync tasks are done, microtasks run (Promise)

// Then, macrotasks like setTimeout run.

// Key Components:
// Term	                                  Meaning
// Call Stack	            Where JS runs functions (one at a time)
// Microtask Queue	           For Promises and queueMicrotask()
// Macrotask Queue	           For setTimeout, setInterval, etc.
// Event Loop	         Checks if Call Stack is empty → pulls from queue

//
// JS is single-threaded, but the Event Loop helps it handle async tasks by
// checking when the call stack is clear and then pulling in queued
// tasks — microtasks first, then macrotasks.
