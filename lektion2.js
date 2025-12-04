function calculateSum(a, b) {
  var sum = a + b;
  console.log(`Summan är: ${sum}`);
}
calculateSum(10, 20);

function isNotTeenager(age) {
  if (age < 13 || age > 19) {
    return true;
  }
  return false;
}
console.log(isNotTeenager(15));

function isSomething(value) {
  const flippedString = value
    .toLowerCase()
    .replaceAll(" ", "")
    .split("")
    .reverse()
    .join("");

  const cleanedValue = value.toLowerCase().replaceAll(" ", "");
  console.log(cleanedValue);
  return cleanedValue === flippedString;
}

console.log("Is it a palindrome? " + isSomething("ni talar bra latin"));

function temperatureInFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
