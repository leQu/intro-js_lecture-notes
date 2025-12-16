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
