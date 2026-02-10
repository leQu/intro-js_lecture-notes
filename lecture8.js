// if (window.jQuery) {
//   // jQuery is loaded
//   console.log("jQuery has been loaded successfully!");
// } else {
//   // jQuery is not loaded
//   console.log("jQuery is not loaded.");
// }

const example = "This is an example string.";
const exampleVaraint2 = "This is another example string.";
const exampleVaraint3 = `This is yet another example string ${example}.`;

const list = [1, 2, 3, 4, 5];

const listLength = [...list];

list.pop();

console.log("List length:", listLength, list);

async function setup() {
  const searchField = document.getElementById("search");
  // const searchField = $("#search");
  const resultList = document.getElementById("searchResult");
  // const resultList = $("#searchResult");

  let response;
  try {
    const data = await fetch("https://dummyjson.com/products");
    response = await data.json();
  } catch (error) {
    console.log(error);
  }
  const dataList = response.products; // [{title: "produkt 1"}, {title: "produkt 2"}, ...]

  console.log(dataList);

  searchField.addEventListener("keypress", (event) => {
    const filtered = dataList.filter((item) => {
      return item.title
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    resultList.innerHTML = filtered
      .map((item) => `<li>${item.title}</li>`)
      .join("");
  });

  // searchField.on("keypress", (event) => {
  //   const filtered = dataList.filter((item) => {
  //     return item.title
  //       .toLowerCase()
  //       .includes(event.target.value.toLowerCase());
  //   });
  //   resultList.html(
  //     filtered.map((item) => `<li>${item.title}</li>`).join("")
  //   );
  // });
}

setup();
