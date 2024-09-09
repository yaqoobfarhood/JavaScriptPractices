'use strict';

// My first code 

// console.log('this is my fist code')

// let fruit = 'apple'

// (3)if(fruit==="apple")console.log()


// (4)JAVA Script is :-
/* 1: High level language: means simple to use easy to understand and no complexity.
2: Object Orented: means store data in objects.
3: multi paragidm: means flexible and versatile.
Logic: Feaching data, click events etc.
*/

// (5)Linking a Javascript File 
/* 1: Link our Javascript in HTML file.

Values & Variables 
let fruit = 'apple';

console.log("Micaheal");
console.log(23);
console.log( 40 + 50 + 10);

let firstname = 'Ali';
console.log(firstname);
console.log(firstname);
console.log(firstname);
*/


// (6)Data Types 
/* PRIMITIVE & OBJECT
1:- Primitive datat type: there are 7 primitive data types
1 Number = disimals
2 String = Charactera EX: "ALi"
3 Boolean = to take disiton true and false 
4 Undefined = means empty value take a varible that not yet defined without asineing a value
5 Null = its like undefined but its use for difrent circle imstanses
6 Symbol = define a value that its uniq and not changable its not very useful for us
7 BigInt = for the intejers that are too larg to be represented by number type 
but there is another feuter in JavaScript = automaticly determ is the data type value when store in a value, value have a type not varible.

const appleaIsfruit = true;
console.log(appleaIsfruit);
console.log(typeof true);
console.log(typeof appleaIsfruit);
console.log(typeof 23432);
console.log(typeof 'aside');

let _undefined;
console.log(_undefined);
console.log(typeof _undefined);

_undefined = 25;
console.log(_undefined);
console.log(typeof _undefined);
console.log(typeof null)
*/

// (7) Let, Const & Var Keywords
/* 
let Keyword = to declear varibles that can change later. 
const keyword = is not changabl, if repet (error).
Var keyword = copmletly avoid it never use it .
let price = 123;
price = 333
console.log(price)

const price = 123;
price = 333
console.log(price)
*/

// (8) Basic Operators
// operators = basicly allows us to combine multiple values
// with difrent catagores like mathimaticle operators asignment operators and MutationRecord....
/*
const curentYear = 2024;
const age1 = curentYear - 1996;
const age2 = curentYear - 2005;
console.log(age1 * 2)
console.log(age2 / 3)

const firstname = 'yaqoob';
const surname = 'Farhood';
console.log(firstname + ' ' + surname);

// Assignment opreator
let fullName = firstname + surname;
console.log(fullName);

let counter = 0;
counter += 10;
console.log(counter);

counter *= 5;
console.log(counter);

counter /= 2;
console.log(counter);

counter++;
console.log(counter);

counter--;
counter--;
counter--;
console.log(counter);

// comparison operators
console.log(age1 < age2);
console.log(age1 > age2);
console.log(age1 <= age2);
*/

// 9.Operator precidence
/*
const curentYear = 2022;
const age1 = curentYear - 1996;
const age2 = curentYear - 2005;

console.log(curentYear - 1996 > curentYear - 2005);
console.log(100 - 30 - 10); 

let a, b;
a = b = 100 - 30 - 10;
console.log(a, b); 
console.log(age1, age2);
const average = (age1 + age2) / 2;
console.log(average); 
*/

// 10. String & Template Litral
/*
const brandName = 'Toyota';
const modelName = 'corola';
const year = 2015;

const myCar = 'My car is' + ' ' + brandName + ' ' + modelName + ' I bougth it in ' + year;
console.log(myCar); 

const myCar2 = `My car is ${brandName} ${modelName} I bougth it in ${year} `;
console.log(myCar2);
*/

// 11. If else Statement
/*
const personName = prompt ("What is your nam?");
const personAge = prompt ("How Old are you?");
const isLegal = personAge >= 7 ;
if (isLegal){
    console.log(`${personName} Jan You can get fast!`);
} else{
    const yearsLeft = 7 - personAge;
    console.log(`${personName} Jan you can get fast ${yearsLeft} years later!`)
}
*/
// Calculator with if statements 
/*
const num1 = prompt ("Enter your first number");
const opreator = prompt ("Enters Your Operator");
const num2 = prompt ("Enter your second number");


let result;

 if ( opreator == '+') {
    result = num1 + num2;
 } else if( opreator == '-') {
    result = num1 - num2;
 } else if( opreator == '*') {
    result = num1 * num2;
 } else {
    result = num1 / num2;
 }

console.log(`The result of ${num1}${opreator}${num2} is equal to = ${result}`);
*/

// 12. Type Convertion & Covertion
// // 1= Type Convertion: is manivalited from one type to another type.  
// const inputAge = '26';
// console.log(inputAge + 3)

// // Type Covertion: JavaScript automaticly convert types behind the seen for us.
// console.log('I was born in' + 1999);
// console.log('I was born in' + '1999');


// 13. Truthy & falsy Values
// falsy Values: 0, '' , undefined, null, nan  withouth this all other values are thrue.
/*
console.log(Boolean(0))
console.log(Boolean(undefined));
console.log(Boolean('Yaqoob'));
console.log(Boolean({}));
console.log(Boolean(''));
 

const candy = 0;
if(555){
   console.log("Do not eat so much candy");
} else{
   console.log("You do not have candy");
}

const candyes = 0;
if(candyes){
   console.log("Do not eat so much candy");
} else{
   console.log("You do not have candy");
}
*/


// 14. Equality Operators 

// const age = 18;
// if (age === 18) console.log('You are of legal age (===)');
// if (age == 18) console.log('You are of legal age (== )');

// const ages = '18';
// if (ages === 18) console.log('You are of legal age (===)');
// if (ages == 18) console.log('You are of legal age (== )');


// const inputAge = prompt('Wat is youe age');
// console.log(inputAge);

// if ( Number(inputAge) === 20) console.log('Ypu are same age with me');

// const inputAge = prompt('Wat is youe age');
// console.log(inputAge);

// if (inputAge == 20) console.log('Ypu are same age with me');

// const inputAge = prompt('Wat is youe age');
// console.log(inputAge);

// if ( inputAge === 20) console.log('Ypu are same age with me');


// const inputAge = Number(prompt('Waht is your age'));
// console.log(inputAge);

// if (inputAge ==== 20) console.log('you are same age me');
// else if (inputAge ==== 8) console.log('You are the same age of my son');
// else console.log('You are not the same age of non of us');


// 15. Booleans 
// AND (&&)  -  OR(||)   -   NOT(!)

// 16. Logical Operatoprs

// const hasMotorcycle = true;
// const hasCar = true;

// console.log( hasMotorcycle && hasCar);
// console.log(hasMotorcycle || hasCar);

// const hasMotorcycle1 = true;
// const hasCar1 = false

// console.log( hasMotorcycle1 && hasCar1);
// console.log(hasMotorcycle1 || hasCar1);

// const hasMotorcycle = true;
// const hasCar = true;

// console.log( hasMotorcycle && hasCar);
// console.log(hasMotorcycle || hasCar);

// const isRainy = false;
// const shuldDruive = hasCar && isRainy;

// if (shuldDruive) {
//    console.log('Jan shuld drive because rainy'); 
// } else if (hasMotorcycle && !isRainy) {
//     console.log('Jan can ride motorcycle');
// }


// 17. switch Statment 
//  alternative way of writiong comletly writing if staetment 
// compear one value to multipale defrent options 



// const number1 = Number(prompt ('Enter your first number'));
// const operator = prompt ('Enter Operator');
// const number2 = Number (prompt ('Enter the second number'));

// switch (operator) {
//    case '+':
//       console.log('additon');
//       console.log(`${number1 + number2}`);
//       break;
//     case '-':
//       console.log('substration');
//       console.log(`${number1 - number2}`);
//          break;
//       case '*':
//       console.log('multiply');
//       console.log(`${number1 * number2}`);
//       break;
//     case '/':
//       console.log('divide');
//       console.log(`${number1 / number2}`);
//       break;
//    default:
//       console.log('Invaild operator');
//       break;
// }



// 18. Statements & Expressions
// EXPRESSION: is a peace of code that produse a value 
// 8 + 7 
// 10000
// true && false && !false

// // STATMENT: like a beger pease of code that executed and whice dose not preduse a value it self 
// //  EX: if else statmnet 
// if ( 12 > 10){ 
//    console.log('12 is biger than 10');
// }


// 19. Ternary Operators 

// const age = 10;
 
// age >= 18;
// ? console.log('You can drive car')
// : console.log('You can not drive a car');

// const vehical = age >= 18 ? `car` : `bicycle`;
// console.log(vehical);
  



////////////////// part two basic of JavaScript //////////////////////////////////////////////



// 1.Strict Mode: a speatial mode that we can activate in Java Script which make easer java script sercure 
// 'use strict'; use for spasific functions or blocs

/*
let isAvalibal = true;
let inMeeting = true;

if(inMeeting) isAvalibal = false;
if(isAvalibal) console.log('person is avalibal');
else console.log("person is in meeting");
*/
// const public = 'canada';
// const private = 'rom 15 ';
// const switch = 'open';

// 2.FUNCTIONS: the fundamental of bulding  of real world javascript applications are functios 
// simply a pease of code that we can use over and over again in our code 
/*
function welcomeText () {
   console.log('Welcome to my page!');
}

welcomeText('hello') //invoking, running, calling 
welcomeText()
welcomeText()

function calculator(number1, number2) {
   console.log(number1, number2);
   const additon = number1 + number2;
   const resultText = `${number1} + ${number2} = ${additon}`; //10 + 20 = 30

   return resultText;
}
 
const result1 = calculator(10, 24);   
console.log(result1);

const result2 = calculator(100, 200);
console.log(result2); 
*/

// DECLERATION & EXPRESSION

//DECLERATION
/*
function calculateAge1(birthYear) {
   const curentYear = 2050;

   return curentYear - birthYear;
}

const age1 = calculateAge1(2004);
console.log(age1);

//EXPREASSION
const calculateAge2 = function (birthYear) {
   const curentYear = 2050;
   
   return curentYear - birthYear;
};

const age2 = calculateAge2 (2004);
console.log(age2);
*/



// const firstName = function(name){
//    console.log(`Yaqoob`);
// }

// const lastName = () => {
//    console.log(`Noorzai`);
// }


// firstName();
// lastName();

// Homework:
// 10 concept for function and do it with three syntax.
 
//---------------------------
// function countryCar (Country){
//    console.log(`Afghanistan`);
// }
// const modelCar = function(car){
//    console.log(`Benz`);
// }

// const yearCar = () => {
//    console.log(`2020`);
// }

// countryCar();
// modelCar();
// yearCar();
// // ---------------------------

// // ---------------------------
// function fatherName (Fname){
//    console.log(`Nader Shah`);
// }

// const brotherName = function (bName){
//    console.log(`Mostafa`);
// }
// const city = () => {
//    console.log(`Herat`);
// }

// fatherName();
// brotherName();
// city();
// // ------------------------

// // ------------------------
// function kindFruit (){
//    console.log(`Banana`);
// }
// const pruductCountry = function (){
//    console.log(`Afghanistan`);
// }
// const deleveryCountry = () => {
//    console.log(`America`);
// }

// kindFruit();
// pruductCountry();
// deleveryCountry();
// // -----------------------

// // -----------------------
// function laptapModel (){
//    console.log(`Latitude 7300`);
// }
// const companyModel = function (){
//    console.log(`DEEL`);
// }
// const yearGenaration = () => {
//    console.log(`2019`);
// }
// laptapModel();
// companyModel();
// yearGenaration();
// -----------------------

// FUNCTON DECLERATION 

// function firstName(){
//    console.log(`Yaqoob`);
// }

// function lastName(){
//    firstName();
//    console.log(`Noorzai`);
// }

// lastName();


// Homework:
// write five function and one main function as calculator to calculate the numbers.

// // Function for Addition
// function add(a, b) {
//    return a + b;
// }

// // Function for Subtraction
// function subtract(a, b) {
//    return a - b;
// }

// // Function for Multiplication
// function multiply(a, b) {
//    return a * b;
// }

// // Function for Division
// function divide(a, b) {
//    if (b === 0) {
//        return "Error: Division by zero";
//    }
//    return a / b;
// }

// // Function for Modulus
// function modulus(a, b) {
//    return a % b;
// }

// // Main Calculator Function
// function calculator(operation, num1, num2) {
//    switch (operation) {
//        case 'add':
//            return add(num1, num2);
//        case 'subtract':
//            return subtract(num1, num2);
//        case 'multiply':
//            return multiply(num1, num2);
//        case 'divide':
//            return divide(num1, num2);
//        case 'modulus':
//            return modulus(num1, num2);
//        default:
//            return "Error: Invalid operation";
//    }
// }

// // Example Usage
// console.log(calculator('add', 5, 3));        // Output: 8
// console.log(calculator('subtract', 5, 3));   // Output: 2
// console.log(calculator('multiply', 5, 3));   // Output: 15
// console.log(calculator('divide', 5, 0));     // Output: Error: Division by zero
// console.log(calculator('modulus', 5, 3));    // Output: 2


// --------------------------------------ARRAYS:


// const car1 = 'BMW';
// const car3 = 'Range Rover';
// const car2 = 'Benz';

// const carArray = ['BMW', 'Range Rover', 'Benz']; //More common.

// const car2Array = new Array('Toyota', 'Audi', 'Purche');


// console.log(carArray);
// console.log(car2Array);



// // Operations of array:

// // Push() 
// // Unshift()
// // Pop()
// // shift()

// const person = ['Mostafa', 'Yaqoob', 'Saber'];
// console.log(person);

// person.push('Belal');
// const personPushLe = person.push('Belal');
// console.log(person);
// console.log(personPushLe);

// person.pop();
// const popName = person.pop();
// console.log(popName);
// console.log(person);

// person.unshift('Ramin');
// console.log(person);

// person.shift();
// console.log(person);
