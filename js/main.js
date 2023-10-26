
console.log('main loaded');
//variables from the html

const submitRebus = document.querySelector('.submit-rebus');
const answer = "Gambling";
const inputField = document.querySelector('.answer');

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
