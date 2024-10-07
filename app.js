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

// question 08

// function calculateHypotenus(base, perpendicular) {
//     function calSquare(num) {
//         return num*num;
//     }

//     let baseSquare = calSquare(base);
//     let hypotenusSquare = calSquare(perpendicular);

//     let hypotenus = Math.sqrt(baseSquare + hypotenusSquare);

//     return hypotenus;
// }

// let base = parseFloat(prompt("Enter Base Value"));
// let perpendicular = parseFloat(prompt("Enter perpendicular Value"));

// let hypotenus = calculateHypotenus(base, perpendicular);
// console.log("The hypotenuse is: " + hypotenus);

// question 09

// function areaOfSquare(width, height) {
//     return width * height;
// }

// let area = areaOfSquare(5, 10);
// console.log("Area Of Circle is.." + " " + area);

// question 11

// function capitilizeWords(str) {
//     let words = str.split(' ');

//     let capitilizedWords = words.map(function(word) {
//         return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//     });

//     return capitilizedWords.join(' ');
// }

// let userInputStr = prompt("Enter Any String");
// let result = capitilizeWords(userInputStr);
// console.log(result);

// question 12

// function findLongestWord(str) {
//     let words = str.split(' ');

//     let longestWord = '';

//     for(let i = 0; i < words.length; i++) {
//         if(words[i].length > longestWord.length) {
//             longestWord = words[i]
//         }
//     }

//     return longestWord;
// }

// let userInput = prompt("Enter Any Thing");
// let result = findLongestWord(userInput);
// console.log(result);

// question 13

// function findOccurence(str, letter) {
//     let count = 0;

//     for(let i = 0; i < str.length; i++){
//         if(str[i] === letter){
//             count++
//         }
//     }

//     return count;
// };

// console.log(findOccurence("hello world", "l"));

// question 14

