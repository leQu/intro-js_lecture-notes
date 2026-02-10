const userButton = document.getElementById("userButton");

function saveUsername() {
  const username = document.getElementById("usernameInput").value;
  sessionStorage.setItem("username", username);
}

userButton.addEventListener("click", saveUsername);

document.addEventListener("DOMContentLoaded", () => {
  const savedUsername = sessionStorage.getItem("username");
  if (savedUsername) {
    document.getElementById("usernameInput").value = savedUsername;
    alert("Välkommen tillbaka, " + savedUsername + "!");
  }
});
