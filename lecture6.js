window.onload = function () {
  console.log("Lecture 6 script loaded");
  const audioButton = document.querySelector(".button-play");
  console.log(audioButton);

  const formulario = document.querySelector("#myForm");
  formulario.getElementsByTagName("input");

  const newElement = document.createElement("p");
  newElement.textContent = "This is a new paragraph added by lecture6.js";
  document.body.appendChild(newElement);

  const textNode = document.createTextNode(
    "This is a text node added by lecture6.js"
  );
  document.body.appendChild(textNode);

  const addTodoButton = document.querySelector("#addTodoButton");
  const removeTodoButton = document.querySelector("#removeTodoButton");
  const todoInput = document.querySelector("#todoInput");
  const todoList = document.querySelector("#todoList");

  console.log(addTodoButton, todoInput);

  removeTodoButton.addEventListener("click", function () {
    const lastItem = todoList.lastElementChild;
    if (lastItem) {
      todoList.removeChild(lastItem);
    }
  });

  addTodoButton.addEventListener("click", function () {
    const todoText = todoInput.value;
    if (todoText.trim() !== "") {
      addTodoItem(todoText);
      todoInput.value = "";
    }
  });

  function addTodoItem(text) {
    const classAttribute = document.createAttribute("class");
    classAttribute.value = "todo-item";
    const listItem = document.createElement("li");
    listItem.setAttributeNode(classAttribute);
    listItem.textContent = text;
    todoList.appendChild(listItem);
  }
};
