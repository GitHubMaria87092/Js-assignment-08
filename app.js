// question 01

// var now = new Date();
// document.write(now);

// question 02

// function greetUser(firstName, lastName) {
//     var fullName = firstName + " " + lastName;
//     alert("Wellcome" + " " + fullName + " " + "!");
// }

// let firstName = prompt("Please Enter Your First Name");
// let lastName = prompt("Please Enter Your Last Name");

// greetUser(firstName, lastName);

// question 03

// function addTwoNumber() {

//     let num1 = parseFloat(prompt("Enter First Number"));
//     let num2 = parseFloat(prompt("Enter Second Number"));

//     let sum = num1 + num2;

//     document.write("Sum of" + " " + num1 + " " + "and" + " " + num2 + " " + "is" + " " + sum);

//     return sum;
// }

// addTwoNumber();

// question 05

// function squareNum(number) {
//     return number * number;
// };

// let num = parseFloat(prompt("Enter a Number you want to see sqare of that number"));
// let result = squareNum(num);

// alert("Square of number is " + result);

// question 06

// function factorial(n) {
//     if(n === 0 || n === 1){
//         return 1
//     }

//     return n * factorial(n - 1);
// }

// let num = parseFloat(prompt("Enter a Number you want to see factorial of that number"));
// let result = factorial(num);

// alert("Factorial of" + " " + num + " " + "is" + " " + result);

// question 07

// function displayCounting(start, end) {

//     if(start > end){
//         document.write("Error: Start number must be less than or equal to the end number!");
//         return;
//     }
    
//     for(var i = start; i <= end; i++){
//         document.write(i + "<br>")
//     };
// };

// let startnum = parseFloat(prompt("Enter Start Number for Counting"));
// let endnum = parseFloat(prompt("Enter end Number for Counting"));

// displayCounting(startnum, endnum);