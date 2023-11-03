
console.log('main loaded');
//variables from the html

const submitRebus = document.querySelector('.submit-rebus');
const answer1 = "Gambling";
const inputField1 = document.querySelector('.answer');

//calls the HTML
submitRebus.addEventListener('click', submitAnswer1);


//wrong answer gives an alert, correct answer sends you to the next room
function submitAnswer1() {
    if (inputField1.value == answer1) {
        alert("You are correct!");
        window.location.assign("kamer4Speluitleg.html");
    } else {
        alert("Wrong answer! Remember capital letters");
    }
}

/*
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
submitRebus.addEventListener('click', submitAnswer1);
 
//wrong answer gives an alert, correct answer sends you to the next room
function submitAnswer1() {
    if (inputField.value == answer) {
        alert("You are correct! Press 'Ok' to go to the next room.");
        window.location.assign("/html/Kamer6Einde.html");
    } else {
        alert("Wrong answer!");
    }
}

*/
//Maria

console.log('main loaded');
//variables from the html

const submitMath = document.querySelector('.submit-math');
const answer2 = "619";
const inputField2 = document.querySelector('.answer1');

//calls the HTML
submitMath1.addEventListener('click', submitAnswer1);


//wrong answer gives an alert, correct answer sends you to the next room
function submitAnswer1() {
    if (inputField1.value == answer2) {
        alert("You are correct!");
        window.location.assign("Kamer5Speluitleg.html");
    } else {
        alert("Wrong answer! Remember capital letters");
    }
}

console.log("answer is 619")