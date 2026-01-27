const z = 10;
const v = undefined;

function example(name) {
  if (!name) {
    console.log("No name provided");
    return;
  }

  const nameToUpper = name.toUpperCase();

  console.log("example function called");
}

setTimeout(() => {
  console.log("seen second");
}, 2000);

function monthToMs(months) {
  return months * 30 * 24 * 60 * 60 * 1000;
}

setTimeout(() => {
  console.log("Three months in milliseconds");
}, monthToMs(3));

setInterval(function () {
  console.log("anotherAnotherExample function called");
}, 3000);

function anotherExample() {
  console.log("anotherExample function called");
}

const thirdExample = function (
  age,
  name,
  school = "Företagsuniversitetet",
  ...args
) {
  console.log(arguments);
  console.log(
    "thirdExample function called,",
    name,
    "is",
    age,
    "years old",
    school,
  );
};

setTimeout(() => {}, 1000);

const fourthExample = (age, name) => {
  console.log(`fourthExample function called, ${name} is ${age} years old`);
};

thirdExample(35, "Alice", "Tech University", "extra1", "extra2");
fourthExample(30, "Bob");

let isTruthy = 0;
isTruthy = String(isTruthy);

if (isTruthy === "0") {
  console.log("isTruthy is truthy");
}

const argumentsExample = {
  name: "Charlie",
  age: 28,
  city: "Stockholm",
};
