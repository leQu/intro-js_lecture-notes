// const ageForDrinking = 23;

function loopThroughListWithLength(list, minStringLenghth = 3) {
  const filteredNames = [];
  for (let i = 0; i < list.length; i++) {
    var z = 10;
    if (list[i].length >= minStringLenghth) {
      filteredNames.push(list[i]);
    }
  }
  return filteredNames;
}

// const names = ["Alice", "Bob", "Charlie", "Diana", "Ethan"];
// const longNames = loopThroughListWithLength(names, 4);
// // console.log(names);
// // console.log(longNames);

// const fruits = ["Apple", "Banana", "Cherry"];
// const longFruits = loopThroughListWithLength(fruits);

// const largeWeirdNumber = 4.565;

// const user = {
//   name: "John Doe",
//   "first name": "John",
//   email: "",
// };

// user["first name"];

// if (user.name === "John") {
//   user.age = 28;
// }

// if ("age" in user) {
//   console.log(`User age is ${user.age}`);
// }

// function setEmail(u) {
//   u.email = "alex@example.com";
// }

// function loginUser(u) {
//   if (u.email) {
//     console.log(`User ${u.name} logged in with email ${u.email}`);
//   } else {
//     console.log(`User ${u.name} has no email set.`);
//   }
// }

// const name = "alex";
// const otherName = "alex";

// const current_age_of_user = 22;

// const user = {
//   "för namn": "alex",
//   age: 22,
// };

const products = [
  {
    name: "macbook pro",
    price: 999.99,
  },
  {
    name: "iphone",
    price: 799.99,
  },
  {
    name: "ipad",
    price: 499.99,
  },
];

console.log(products[0]);

console.log(`Priset för en macboookpro är ${products[0].price} USD.`);
console.log("Priset för en macboookpro är " + products[0].price + " USD.");

for (let i = 0; i < products.length; i++) {
  console.log(
    `Product: ${products[i].name}, Price: $${products[i].price.toFixed(2)}`
  );
}

// loginUser(user);
// setEmail(user);
// loginUser(user);

// // console.log(userAge, typeof userAge);
// // while (userAge < 25) {
// //   if (userAge === ageForDrinking) {
// //     console.log("You are allowed to drink.");
// //   } else {
// //     console.log("You are not allowed to drink.");
// //   }
// //   userAge++;
// // }

// let userAge = 18;
// let userAgeNew = userAge + 5;

// userAge = 20;

// console.log(userAgeNew);

// userAge = `Alex ${userAge}`;

let person = {
  name: "Oscar",
  age: 30,
  isEmployed: {
    employer: {
      name: "Tech Corp",
      location: "New York",
      "capital city": "Washington D.C.",
    },
    position: "Developer",
  },
  address: {
    street: "Birch Road",
    city: "Stockholm",
  },
};

// const person1 = person;

// person.hobbies = ["Reading", 5, { name: "Gaming" }];

// delete person.age;

// let firstNumber = 40;
// let secondNumber = 20;

// console.log(firstNumber + secondNumber);

// console.log(firstNumber + secondNumber);

// console.log("Hello, World!", firstNumber, secondNumber);

// console.log(
//   `The sum of ${firstNumber} and ${secondNumber} is ${
//     firstNumber + secondNumber
//   }.`
// );

// const firstName = "Alexander";

// console.log(firstName);
// console.log(firstName.toUpperCase());
// console.log(firstName.toLowerCase());
