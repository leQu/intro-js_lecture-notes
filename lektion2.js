// function calculateSum(a, b) {
//   var sum = a + b;
//   console.log(`Summan är: ${sum}`);
// }
// calculateSum(10, 20);

// function isNotTeenager(age) {
//   if (age < 13 || age > 19) {
//     return true;
//   }
//   return false;
// }
// console.log(isNotTeenager(15));

// function isSomething(value) {
//   const flippedString = value
//     .toLowerCase()
//     .replaceAll(" ", "")
//     .split("")
//     .reverse()
//     .join("");

//   const cleanedValue = value.toLowerCase().replaceAll(" ", "");
//   console.log(cleanedValue);
//   return cleanedValue === flippedString;
// }

// console.log("Is it a palindrome? " + isSomething("ni talar bra latin"));

// function temperatureInFahrenheit(celsius) {
//   return (celsius * 9) / 5 + 32;
// }

// const person = { firstName: "John", lastName: "Doe" };

// for (let key in person) {
//   console.log(key, person[key]); // Skriver ut "firstName John" och "lastName Doe"
// }

// for (let i = 0; i < Object.keys(person).length; i++) {
//   console.log(Object.keys(person)[i], person[Object.keys(person)[i]]); // Skriver ut "firstName John" och "lastName Doe"
// }

// let colors = ["red", "green", "blue"];

// for (let color of colors) {
//   switch (color) {
//     case "green":
//       console.log("Träd är gröna");
//       break;
//     case "red":
//       console.log("Röda bilar är snabba");
//       break;
//     case "blue":
//       console.log("Himlen är blå");
//       break;
//     default:
//       console.log("Okänd färg");
//   }
// }

// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]); // Skriver ut "red", "green", "blue"
// }

// let z = 10;

// do {
//   console.log(z);
//   z++;
// } while (z < 5);

// function greet(name = "Guest") {
//   // var x;
//   console.log(x);

//   if (true) {
//     var x = 10;
//     console.log("This will never be executed");
//   }

//   return "Hello, " + name + "!";
// }

// const x = 5.44;

// if (typeof x === "number") {
//   console.log(Math.round(x));
// }
