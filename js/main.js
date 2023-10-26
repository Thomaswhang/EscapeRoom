

console.log('main loaded');
//variables from the html

const submitRebus1 = document.querySelector('.submit-rebus');
const answer1 = "Gambling";
const inputField1 = document.querySelector('.answer');

//calls the HTML
submitRebus.addEventListener('click', submitAnswer);


//wrong answer gives an alert, correct answer sends you to the next room
function submitAnswer() {
    if (inputField.value == answer) {
        alert("You are correct!");
        window.location.assign("/Rebus puzzel/uitlegkamer.html");
    } else {
        alert("Wrong answer! Remember capital letters");
    }
} 
Tristan
console.log('Main Loaded')

const button = document.querySelector('.my-button');
button.addEventListener('click', function () {
    const myDiv = document.querySelector('.my-div');
    myDiv.textContent = 'Answer this riddle: Half a twin and a quarter of four make me, but I am not one.'
    console.log(button);
});

const submitRebus = document.querySelector('.submit-button');
const answer = "two";
const inputField = document.querySelector('.answer');
 
//calls the HTML
submitRebus.addEventListener('click', submitAnswer);
 
//wrong answer gives an alert, correct answer sends you to the next room
function submitAnswer() {
    if (inputField.value == answer) {
        alert("You are correct! Press 'Ok' to go to the next room.");
        window.location.assign("/html/index.html");
    } else {
        alert("Wrong answer!");
    }
}

//Maria

