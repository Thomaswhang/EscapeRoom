console.log('main loaded')
console.log("het antwoord is 619")

const myButton = document.querySelector('.my-button')
myButton.addEventListener('click', myFunction);

function myFunction() {
    const answer = prompt('What is your answer?',);

    if (answer === "619") {
        alert('You win, you can go to the next room')
    }

    else {
        alert('You lost you fool, Try Again!')
    }

}


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