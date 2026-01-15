const currentClass = "fullstack2.5"; // String
const currentYear = 2025; // Number
const currentGrade = 4.569234; // Number (float)
const isPresent = true; // Boolean
let isDeclaired; // Undefined
const doesNotExiss = null; // Null

// STRING FUNCTIONS

let result = currentClass.charAt(6);

result = currentClass.slice(4, 9);

result = currentClass.toUpperCase();

const firstLetter = currentClass.charAt(0).toUpperCase();
const restOfString = currentClass.slice(1).toLowerCase();
result = firstLetter + restOfString;

const allLetter = currentClass.split("");
allLetter[0] = allLetter[0].toUpperCase();
result = allLetter.join("");

let first_Last = "  Alex Lantz  ";
result = first_Last.trim().toLowerCase().replace(" ", "_");

switch (currentClass) {
  case "fullstack25 ":
    result = "Welcome to Fullstack 25!";
    break;
  case "fullstack24":
    result = "Welcome to Fullstack 24!";
    break;
  default:
    result = "Unknown class";
}

// NUMBER FUNCTIONS

result = currentGrade.toFixed(2);

const classYear = currentClass.slice(
  currentClass.length - 3,
  currentClass.length
);

result = parseInt(classYear);

// let numStr = "1234px";
// let num = parseInt(numStr, 10); // 1234
// console.log(num);

result = parseFloat(classYear);

result = parseInt(Math.random() * 10); // 0.0 - 0.9999

result = Math.round(classYear);
// result = Math.ceil(classYear);
// result = Math.floor(classYear);

let firstNumberFromForm = "5.67";
let secondNumberFromForm = "3.45";

result = Math.max(
  parseFloat(firstNumberFromForm),
  parseFloat(secondNumberFromForm)
);
result = Math.min(
  parseFloat(firstNumberFromForm),
  parseFloat(secondNumberFromForm)
);

// OBJECT FUNCTIONS

const student = {
  firstName: "Alex",
  lastName: "Lantz",
  age: 29,
  isActive: true,
};

const allKeys = Object.keys(student); // ['firstName', 'lastName', 'age', 'isActive']
const allValues = Object.values(student); // ['Alex', 'Lantz', 29, true]

function showPopPushShiftUnShiftFunctions(myHobbies) {
  myHobbies.push("traveling"); // Lägger till i slutet
  console.log("Current result:", myHobbies);
  console.log(myHobbies.pop()); // Tar bort i slutet (och returnerar)
  console.log("Current result:", myHobbies);
  myHobbies.unshift("swimming"); // Lägger till i början
  console.log("Current result:", myHobbies);
  console.log(myHobbies.shift()); // Tar bort i början (och returnerar)
  console.log("Current result:", myHobbies);
}

// showPopPushShiftUnShiftFunctions(["reading", "gaming", "coding"]);

result = ["reading", "gaming", "coding"].join(", ");

result = Array.isArray(["reading", "gaming", "coding"]);

const lista = [1, 4, 2, 5, 7, 9, 6, 14];
const evenList = [];

for (let i = 0; i < lista.length; i++) {
  if (lista[i] % 2 === 0) {
    evenList.push(lista[i]);
  }
}

evenList.forEach((num, i) => (evenList[i] = num * 2));

let numberLargerthan10;
for (let i = 0; i < lista.length; i++) {
  if (lista[i] >= 10) {
    numberLargerthan10 = lista[i];
    break;
  }
}

let hasNumberLargerthan10 = false;
for (let i = 0; i < lista.length; i++) {
  if (lista[i] >= 10) {
    hasNumberLargerthan10 = true;
    break;
  }
}

const filteredList = lista.filter((num) => num % 2 === 0);

function differentForLoops() {
  for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
  }

  for (let num of lista) {
    console.log(num);
  }

  lista.forEach((num) => console.log(num));
}

const stockData = [
  { product: "Apple", price: 1.2, inStock: true },
  { product: "Banana", price: 0.8, inStock: false },
  { product: "Orange", price: 1.5, inStock: true },
  { product: "Dragonfruit", price: 2.0, inStock: true },
];

const newList = stockData.map((stock) => stock.price);

stockData.every((stock) => stock.price > 1);

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, num) => total + num, 0);

const experimentalReduceFunction = stockData.reduce((total, current) => {
  total[current.product] = current.price;
  return total;
}, {});

console.log(experimentalReduceFunction);

const doubledNumbers = numbers.map((num) => {
  return num * 2;
}); // [2,4,6,8,10]

const filterdNumbers = numbers.filter((num) => {
  return num > 2;
}); // [3,4,5]

const isSomeAboveThree = numbers.some((num) => {
  return num > 3;
}); // true

const stockData2 = [
  { product: "Apple", price: 1.212312312, inStock: true },
  { product: "Banana", price: 0.84234234, inStock: false },
  { product: "Orange", price: 1.5555, inStock: true },
  { product: "Dragonfruit", price: 2.01, inStock: true },
];

const cleanedData = stockData2.map((stock) => {
  return {
    productName: stock.product.toUpperCase(),
    price: stock.price.toFixed(2),
    availability: stock.inStock ? "In Stock" : "Out of Stock",
  };
});
