const z = 10;
const v = undefined;

function example() {
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

function anotherExample() {
  console.log("anotherExample function called");
}

setInterval(function () {
  console.log("anotherAnotherExample function called");
}, 3000);

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
    school
  );
};

const fourthExample = (age, name) => {
  console.log(`fourthExample function called, ${name} is ${age} years old`);
};

thirdExample(35, "Alice", "Tech University", "extra1", "extra2");
fourthExample(30, "Bob");

const isTruthy = 0;

if (isTruthy === "0") {
  console.log("isTruthy is truthy");
}
