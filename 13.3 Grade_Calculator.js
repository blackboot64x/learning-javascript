/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

let score = 82;
let grade;

if (score >= 90) {
    grade = "A";
}
else if (score >= 80) {
    grade = "B";
}
else if (score >= 70) {
    grade = "C";
}
else if (score >= 60) {
    grade = "D";
}
else {
    grade = "F"
}

console.log("Grade:", grade)