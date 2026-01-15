function whenButtonClicked(input) {
  alert("Du klickade på knappen!");
}

const whenButtonClickedAgain = function (input) {
  alert("Du klickade på knappen igen!");
};

const whenButtonClickedArrow = (input) => {
  alert("Du klickade på knappen med en arrow function!");
};

window.addEventListener("load", () => {
  console.log("Sidan är helt inladdad!");
  const clickButton = document.getElementById("clickButton");
  const mouseButton = document.getElementById("mouseButton");

  clickButton.addEventListener("click", () =>
    alert("Du klickade på knappen igen!")
  );

  const myDraggableElement = document.getElementById("myDraggable");

  mouseButton.addEventListener("mousedown", function () {
    console.log("Mouse button pressed!");
  });
  mouseButton.addEventListener("mouseup", function () {
    console.log("Mouse button released!");
  });

  const dragonfruit = document.getElementById("myDraggable");

  dragonfruit.addEventListener("mousemove", function (e) {
    console.log("Mouse moved:", e.clientX, e.clientY);
  });

  document.addEventListener("keydown", function (event) {
    console.log("Key down:", event.key);
  });
  const myForm = document.getElementById("myForm");
  myForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(myForm);
    const name = formData.get("nameInput");
  });

  const myAudioPlayButton = document.getElementById("playAudioButton");
  const myAudio = document.getElementById("myAudio");

  myAudioPlayButton.addEventListener("click", () => {
    myAudio.play();
  });
});

// Asynkronitet i JavaScript

// console.log("seen first");

// setTimeout(() => {
//   console.log("seen second");
// }, 2000);

// console.log("seen third");
