alert ("Hello!");
console.log ("Hello!");
//when you open the page, you get an alert that says "Hello!"

 function img1() {
    document.getElementById("image").src="Fishyup.jpg";
 }

function img2() {
    document.getElementById("image").src="Fishypizza.jpg";
}
//When you scroll over the image with your mouse, it changes the picture.
//Images were by a friend, not me.

let value4 = generate(10);

function Random() {
    var rnd = Math.floor(Math.random() * 100);
    document.getElementById('number').value = rnd;
}
//When you click on the generate button, it randomizes a number between 1 and 100.

const btn= document.getElementById("enter");

function greeting()
{
  var name = document.getElementById("inputName").value;
  alert("Greetings," + " " + name)};
//When you input your name or anything else, an alert will pop up, saying 'greetings, -insert name here-'