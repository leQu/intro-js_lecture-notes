const z = 5 + 10;
if (z > 15) {
  console.log("Summan är: ", z, "Större än 15");
} else {
  console.log("Summan är: ", z, "Mindre än eller lika med 15");
}

function whatEver(list, key) {
  const orderdObject = { 30: [], 25: [], other: [] };
  for (let i = 0; i < list.length; i++) {
    switch (list[i][key]) {
      case 30:
        orderdObject["30"] = [...orderdObject?.["30"], list[i]];
        break;
      case 25:
        orderdObject["25"] = [...orderdObject?.["25"], list[i]];
        break;
      default:
        orderdObject["other"] = [...orderdObject?.["other"], list[i]];
        break;
    }
  }

  return orderdObject;
}

const orderObjet = whatEver(
  [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 25 },
  ],
  "age"
);

console.log(orderObjet);

const color = "blue";

const age = 25;

if (age > 20) {
  console.log("Age is greater than 20");
} else if (age === 20) {
  console.log("Age is exactly 20");
} else {
  console.log("Age is less than 20");
}

switch (age) {
  case 30:
    console.log("Age is 30");
    break;
  case 25:
    console.log("Age is 25");
    break;
  default:
    console.log("Age is something else");
    break;
}

const ages = {
  30: "Age is 30",
  25: "Age is 25",
  35: "Age is 35",
};

const ageMessage = ages[age] || "Age is something else";

switch (color) {
  case "red":
    console.log("Color is red");
    break;
  case "blue":
    console.log("Color is blue");
    break;
  case "green":
}
