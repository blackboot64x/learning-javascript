/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

const passengerAge = 40;
const isStudent = false;

const ticketPrice = 800;

if (passengerAge <= 10) {
    console.log("Your ticket is free");
} else if (isStudent === true) {
    const discountAmount = ticketPrice * (50 / 100);
    const totalPay = ticketPrice - discountAmount;
    console.log("You have to pay", totalPay, "tk (Student Discount)");
} else if (passengerAge >= 60) {
    const discountAmount = ticketPrice * (15 / 100);
    const totalPay = ticketPrice - discountAmount;
    console.log("You have to pay", totalPay, "tk (Senior Discount)");
} else {
    console.log("You have to pay", ticketPrice, "tk (Regular Price)")
}

