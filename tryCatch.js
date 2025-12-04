try {
  await fetch("https://dumjson.com/products?limit=1");
} catch (error) {
  console.error(`\n\nError fetching data: ${error}\n\n`);
} finally {
  console.log("Fetch attempt finished.");
}

let i = 0;
while (i < 5) {
  console.log(i); // Skriver ut 0, 1, 2, 3, 4
  i++;
}
