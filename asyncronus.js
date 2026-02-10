const dataPromise = fs
  .readFile("data.txt", "utf8")
  .then((data) => {
    console.log("Data read successfully:", data);
    data.json();
  })
  .then((jsonData) => {
    console.log("Parsed JSON data:", jsonData);
  })
  .catch((error) => {
    console.error("Error reading or parsing data:", error);
  });

async function readData() {
  try {
    const data = await fs.readFile("data.txt", "utf8");
    console.log("Data read successfully:", data);
    const jsonData = JSON.parse(data);
    console.log("Parsed JSON data:", jsonData);
  } catch (error) {
    console.error("Error reading or parsing data:", error);
  }
}

readData();
