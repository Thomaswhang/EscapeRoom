
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

//Tristan

/*console.log('Main Loaded')

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
        window.location.assign("/html/index.html");
    } else {
        alert("Wrong answer!");
    }
}

//Maria
*/

console.log("The answer is surely not 619:)");

const myButton = document.querySelector('.my-button');
myButton.addEventListener('click', checkAnswer);

 

function checkAnswer() {
    const answer = prompt('What is your answer?');

 

    if (answer === "619") {
        alert('You win, you can go to the next room');
    } else {
        alert('You lost you fool, Try Again!');
    }
}

const myButtonTwo = document.querySelector('.my-button-two');
myButtonTwo.addEventListener('click', function() {
    alert('Do not look on F12');
});

// console.log('main loaded')
// console.log("het antwoord is 619")

// const myButton = document.querySelector('.my-button')
// myButton.addEventListener('click', myFunction);

// function myFunction() {
//     const answer = prompt('What is your answer?');

//     if (answer === "619") {
//         alert('You win, you can go to the next room')
//     }

//     else {
//         alert('You lost you fool, Try Again!')
//     }

// }

// const myButtonTwo = document.querySelector('.my-button-two')
// myButtonTwo.addEventListener('click', myFunction);
// function myFunction() {
//     alert('Do not look on F12')
// }





// function myFunction() {
//     if (answer === "619") {
//         alert('You win, you can go to the next room')
//     }

//     else {
//         alert('You lost you fool, Try Again!')
//     }

// }


// const result = prompt('Wat is je naam', 'JanHenk');
// alert(`Jouw naam is ${result}`);

// {
//     prompt('What is the answer?');
//     const Answer = "619";
//     if (Answer === "619") {
//         alert('You won! You can go to the next room');
//     } else {
//         alert('You lost you fool. Try again!');
//     }
// }

