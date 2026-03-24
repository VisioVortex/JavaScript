let gameNum = 40;
let userNum = prompt("Enter the game number: ");
while (userNum != gameNum) {
    userNum = prompt("Wrong number! Try again: ");
}
console.log("Congratulations! You entered the right number.");