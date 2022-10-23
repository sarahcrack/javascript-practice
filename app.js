function sayHello(event) {
  event.preventDefault();

  var childName = document.querySelector("#name-input").value;

  if (childName !== "") {
    var welcomeText = `Hello ${childName}!`;
  } else {
    var welcomeText = `Hello you!`;
  }

  document.getElementById("welcome").innerText = welcomeText;
}

document.addEventListener("submit", sayHello);

function pickColour(event) {
  event.preventDefault();

  var colourPickPurple = document.querySelector("purple-btn");
  var colourPickGreen = document.querySelector("green-btn");
  var colourPickOrange = document.querySelector("orange-btn");

  if ((colourPickPurple = true)) {
    alert(
      "Good try but not quite there yet! Please check the colour wheel and pick again..."
    );
  } else if ((colourPickGreen = true)) {
    alert(
      "Good try but not quite there yet! Please check the colour wheel and pick again..."
    );
  } else if ((colourPickOrange = true)) {
    window.location.href = "https://www.google.co.uk/";
  }
}

document.addEventListener("click", pickColour);
