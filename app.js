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

// main one I was working with but doesn't seem to change alert / link when clicking the different buttons. I don't think the '= tru' is correct but was playing around with it!

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
    alert("Good try but not quite there yet!");
  } else if ((colourPickOrange = true)) {
    window.location = "https://www.google.co.uk/";
  }
}

document.addEventListener("click", pickColour);

// suggested online?! (below)

// document.getElementById("colour-buttons").addEventListener(
//   "click",
//   function (event) {
//     var target = event.target;
//     if (target.id == "purple-btn") {
//       alert("Try again!");
//     } else if (target.id == "green-btn") {
//       alert("Nice try!");
//     }
//   },
//   false
// );
