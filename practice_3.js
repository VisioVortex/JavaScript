let score;
score = prompt("Enter your score:");
if (score >= 80 && score <= 100) {
    console.log("Grade: A");
} else if (score >= 70 && score < 79) {
    console.log("Grade: B");
} else if (score >= 50 && score < 69) {
    console.log("Grade: C");
} else if (score >= 33 && score < 49) {
    console.log("Grade: D");
} else if (score >= 0 && score < 33) {
    console.log("Grade: F");
} else {
    console.log("Invalid score. Please enter a number between 0 and 100.");
}