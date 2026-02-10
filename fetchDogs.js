async function getDogs() {
  try {
    const response = await fetch("https://api.thedogapi.com/v1/images/search");
    const data = await response.json();
    if (response.status === 404) {
      throw { status: 404, message: "Resource not found" };
    }
    console.log("Everything worked status:", response.status);
    console.log(data);
  } catch (error) {
    if (error.status === 404) {
      console.log("Resource not found (404)");
    } else {
      console.error("An error occurred:", error);
    }
  }
}

getDogs();
