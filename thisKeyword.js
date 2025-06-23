// this refers to the object that is executing the current function.
// Its value depends on how the function is called, not where it's written."

// and also showing different bewteen this in arrow and normal functions
const obj = {
  name: "Faraan",
  arrow: () => console.log(this.name), // ❌ undefined (global this)
  normal() {
    console.log(this.name); // ✅ "Faraan"
  },
};

obj.arrow();
obj.normal();
