
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");
var button6 = document.getElementById("button6");


button1.addEventListener("click", firstButton);
button2.addEventListener("click", secondButton);
button3.addEventListener("click", thirdButton);
button4.addEventListener("click", fourthButton);
button5.addEventListener("click", fifthButton);
button6.addEventListener("click", sixthButton);

document.onkeydown = function(event) {
      var userInput = event.key;
      if (userInput == "q") {
      	button1.classList.add("color-me1");
      } else if (userInput == "w") {
      	button2.classList.add("color-me2");
      } else if (userInput == "e") {
      	button3.classList.add("color-me3");
      } else if (userInput == "r") {
      	button4.classList.add("color-me4");
      } else if (userInput == "t") {
      	button5.classList.add("color-me5");
      } else if (userInput == "y") {
      	button6.classList.add("color-me6");
      } else if (userInput == "u") {
      	button7.classList.add("color-me7");
      } else if (userInput == "i") {
      	button8.classList.add("color-me8");
      } else if (userInput == "o") {
      	button9.classList.add("color-me9");
      } else if (userInput == "p") {
      	button10.classList.add("color-me10");
      } else if (userInput == "a") {
      	button11.classList.add("color-me11");
      } else if (userInput == "s") {
      	button12.classList.add("color-me12");
      } else if (userInput == "d") {
      	button13.classList.add("color-me13");
      } else if (userInput == "f") {
      	button14.classList.add("color-me14");
      } else if (userInput == "g") {
      	button15.classList.add("color-me15");
      } else if (userInput == "h") {
      	button16.classList.add("color-me16");
      } else if (userInput == "j") {
      	button17.classList.add("color-me17");
      } else if (userInput == "k") {
      	button18.classList.add("color-me18");
      } else if (userInput == "l") {
      	button19.classList.add("color-me19");
      } else if (userInput == "z") {
      	button20.classList.add("color-me20");
      } else if (userInput == "x") {
      	button21.classList.add("color-me21");
      } else if (userInput == "c") {
      	button22.classList.add("color-me22");
      } else if (userInput == "v") {
      	button23.classList.add("color-me23");
      } else if (userInput == "b") {
      	button24.classList.add("color-me24");
      } else if (userInput == "n") {
      	button25.classList.add("color-me25");
      } else if (userInput == "m") {
      	button26.classList.add("color-me26");
      }
}


document.onkeyup = function(event) {
      var userInput = event.key;
      if (userInput == "q") {
      	button1.classList.add("normal");
      } else if (userInput == "w") {
      	button2.classList.add("color-me2");
      } else if (userInput == "e") {
      	button3.classList.add("color-me3");
      } else if (userInput == "r") {
      	button4.classList.add("color-me4");
      } else if (userInput == "t") {
      	button5.classList.add("color-me5");
      } else if (userInput == "y") {
      	button6.classList.add("color-me6");
      } else if (userInput == "u") {
      	button7.classList.add("color-me7");
      } else if (userInput == "i") {
      	button8.classList.add("color-me8");
      } else if (userInput == "o") {
      	button9.classList.add("color-me9");
      } else if (userInput == "p") {
      	button10.classList.add("color-me10");
      } else if (userInput == "a") {
      	button11.classList.add("color-me11");
      } else if (userInput == "s") {
      	button12.classList.add("color-me12");
      } else if (userInput == "d") {
      	button13.classList.add("color-me13");
      } else if (userInput == "f") {
      	button14.classList.add("color-me14");
      } else if (userInput == "g") {
      	button15.classList.add("color-me15");
      } else if (userInput == "h") {
      	button16.classList.add("color-me16");
      } else if (userInput == "j") {
      	button17.classList.add("color-me17");
      } else if (userInput == "k") {
      	button18.classList.add("color-me18");
      } else if (userInput == "l") {
      	button19.classList.add("color-me19");
      } else if (userInput == "z") {
      	button20.classList.add("color-me20");
      } else if (userInput == "x") {
      	button21.classList.add("color-me21");
      } else if (userInput == "c") {
      	button22.classList.add("color-me22");
      } else if (userInput == "v") {
      	button23.classList.add("color-me23");
      } else if (userInput == "b") {
      	button24.classList.add("color-me24");
      } else if (userInput == "n") {
      	button25.classList.add("color-me25");
      } else if (userInput == "m") {
      	button26.classList.add("color-me26");
      }
}
$("#hide1").click(function(){
    $("#button4").toggle();
});

$("#hide2").click(function(){
    $("#button5").toggle();
});

$("#hide3").click(function(){
    $("#button6").toggle();
});


function firstButton() {
	console.log("hello world");
	button1.classList.add("color-me1");
	}
function secondButton() {
	console.log("hello world");
	button2.classList.add("color-me2");

}
function thirdButton() {
	console.log("hello world");
	button3.classList.add("color-me3");
}
function fourthButton() {
	console.log("hello world");
	button4.classList.add("color-me4");
}
function fifthButton() {
	console.log("hello world");
	button5.classList.add("color-me5");
}
function sixthButton() {
	console.log("hello world");
	button6.classList.add("color-me6");
}