// for (i = 10; i > 0; i--) {
//   console.log(i);
// }

// function sum(number1, number2) {
//   return number1 + number2;
// }

// console.log(sum(2, 3));

// function division(number1, number2) {
//   return number1 / number2;
// }

// console.log(division(10, 2));

// const favouriteNumber = sum(2, 9);

// function myName() {
//   let name = prompt("What is your name?");
//   return name;
// }

// console.log(myName());

// function movieDetails(title, released) {
//   return `${title} came out in ${released}`;
// }

// let movie1 = movieDetails("Mean Girls", 2004);

// console.log(movie1);

// function shoppingCart(item, cost, balance) {
//   if (balance >= cost) {
//     return `Yay you can buy the ${item}`;
//   } else {
//     return `Sorry, you don't have enough for ${item} with a balance of ${balance} as it costs ${cost} but please look out for our future deals!`;
//   }
// }

// console.log(shoppingCart("dress", 20, 30));

// function reverseString(string) {
//   return string.reverse();
// }

// function sum(number1, number2) {
//   return number1 + number2;
// }

// // console.log(sum(5, 2));

// // function power(number1, number2) {
// //   return number1 ** number2;
// // }

// // console.log(power(2, 3));

// // function powerPrompt() {
// //   let number1 = prompt("What is your first number?");
// //   let number2 = prompt("What is your second number?");
// //   return power(number1, number2);
// // }

// // var yourPower = powerPrompt();

// // console.log(yourPower);

// var travelObject = {
//   favouriteCity: "Bangkok",
//   favouriteFood: "Italian",
//   favouriteAirline: "Emirates",
//   sayHello: function helloWorld() {
//     console.log(sayHello());
//   },
// };

// console.log(travelObject.favouriteAirline);
// sayHello();

// var travelObject = {
//   favouriteCity: "Bangkok",
//   favouriteFood: "Italian",
//   favouriteAirline: "Emirates",
//   sayHello: function helloWorld() {
//     console.log(sayHello());
//   },
// };

// console.log(travelObject.favouriteAirline);

// function promptForUserName() {
//   var name = prompt("What is your name?");
//   alert(`Hello ${name}`);
// }

// function addChildName(response) {
//   var childName = prompt("What is your name?");
//   document.querySelector("#childUserName").innerHTML = response.childName;
// }

// document.addEventListener(
//   "DOMContentLoaded",
//   function changeToChildName(response) {
//     var childName = prompt("What is your name?");
//     var newWelcome = document.createElement("h1");
//     newWelcome.innerText = `Hello ${childName}`;
//     changeToChildName(response);
//   }
// );

// document
//   .querySelector("#welcome-button")
//   .addEventListener("onclick", changeToChildName);

// function changeToChildName() {
//   var childName = prompt("What is your name?");
//   alert(childName);
// }

// document.addEventListener("DOMContentLoaded", function () {
//   var welcomeMessage = document.createElement("h1");
//   welcomeMessage.innerText = "Hello!";

//   welcomeMessage.addEventListener("click", function (event) {
//     var childName = prompt("What is your name?");
//     newWelcomeMessage = `Hello ${childName}!`;
//   });

//   document.body.appendChild(welcomeMessage);
// });

// window.onload = function sayHello() {
//   var childName = prompt("Hello and welcome! What is your name?", "Name");
//   document.getElementById("#welcome").innerHTML = `Hello ${childName}`;

//   document.body.appendChild(childName);
// };

// function sayHello() {
//   window.addEventListener("load", sayHello);

//   var childName = prompt("Hello and Welcome! What's your name?", "Name");

//   document
//     .getElementById("welcome")
//     .appendChild(document.createTextNode(` Hello ${childName}!`));
// }

// window.addEventListener("load", sayHello, false);

function sayHello() {
  window.addEventListener("onsubmit", sayHello);

  var childName = document.querySelector("#name-input").value;

  document
    .getElementById("welcome")
    .appendChild(document.createTextNode(` Hello ${childName}!`));
}

window.addEventListener("onsubmit", sayHello, false);
