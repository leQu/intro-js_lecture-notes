function varExample() {
  if (true) {
    var x = 1;
  }

  if (true) {
    var x = 2; // same variable
    console.log(x); // 2
  }
  console.log(x); // 2 - var is not block-scoped
}

// let is block-scoped
function letExample() {
  if (true) {
    let y = 1;
  }
  if (true) {
    let y = 2; // different variable
    console.log(y); // 2
  }
  console.log(y); // 1 - let is block-scoped
}

// var allows re-declaration
var a = 1;
var a = 2; // OK

// let does not allow re-declaration
let b = 1;
// let b = 2; // SyntaxError

// var hoisting
console.log(c); // undefined (hoisted)
var c = 3;

// let hoisting (Temporal Dead Zone)
// console.log(d); // ReferenceError (cannot access before initialization)
let d = 45;

if (typeof d === "number") {
  console.log("d is a number");
}

varExample();
letExample();
