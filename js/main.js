console.log('main loaded');
//variables from the html

const submitRebus1 = document.querySelector('.submit-rebus');
const answer1 = "Gambling";
const inputField1 = document.querySelector('.answer');

//calls the HTML
submitRebus1.addEventListener('click', submitAnswer1);


//wrong answer gives an alert, correct answer sends you to the next room
function submitAnswer1() {
    if (inputField1.value == answer1) {
        alert("You are correct!");
        window.location.assign("kamer4Speluitleg.html");
    } else {
        alert("Wrong answer! Remember capital letters");
    }
} 


