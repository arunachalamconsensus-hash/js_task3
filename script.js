// 27. Create an IIFE that accepts a product name and discount percentage,
// then displays a sale message using a template string.
(function(productName, discount) {

    alert(`${productName} is available at ${discount}% discount`);

})("Saree", 20);


// Part 1: Functions and Parameters (5 Questions)

// 1. Create a function welcome() that prints "Welcome to JavaScript".
function welcome() {
    console.log("Welcome to JavaScript");
}

welcome();


// 2. Create a function studentDetails(name, age, cgpa) that prints all three values.
// Call it with two different students.
function studentDetails(name, age, cgpa) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("CGPA:", cgpa);
}

studentDetails("Arun", 25, 8.5);
studentDetails("Priya", 22, 9.2);


// 3. Create a function calculateFee(fee) that returns the student fee.
// Store the returned value in a variable and print it.
function calculateFee(fee) {
    return fee;
}

let studentFee = calculateFee(200000);

console.log("Student Fee:", studentFee);


// 4. Create a function discount(percent) that calculates a discount
// on a fee of ₹200,000 and prints the final fee.
function discount(percent) {
    let fee = 200000;
    let discountAmount = fee * percent / 100;
    let finalFee = fee - discountAmount;

    console.log("Final Fee:", finalFee);
}

discount(20);


// 5. Create a function studentForm(name, age, disability = "no").
// Call it three times, including once without passing the disability argument.
function studentForm(name, age, disability = "no") {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Disability:", disability);
}

studentForm("Arun", 25, "yes");
studentForm("Priya", 22, "no");
studentForm("Rahul", 23);


// Part 2: Function Types and Scope (5 Questions)


// 6. Create a named function that accepts a message and prints it.
function displayMessage(message) {
    console.log(message);
}

displayMessage("Welcome to JavaScript");


// 7. Create an anonymous function and store it in a variable.
// Pass a name to it and print the name.
let displayName = function(name) {
    console.log("Name:", name);
};

displayName("Arun");


// 8. Create an arrow function that accepts a number and prints it.
let printNumber = (number) => {
    console.log("Number:", number);
};

printNumber(25);


// 9. Create a function containing var, let, and const inside an if block.
// Check which variables can be accessed inside and outside the block.
function checkScope() {

    if (true) {
        var a = 10;
        let b = 20;
        const c = 30;

        console.log("Inside if block:");
        console.log(a);
        console.log(b);
        console.log(c);
    }

    console.log("Outside if block:");
    console.log(a);

    // console.log(b); // Error: b is block scoped
    // console.log(c); // Error: c is block scoped
}

checkScope();


// 10. Predict the output:
// console.log(value);
// var value = 10;

// Output:
// undefined

console.log(value);
var value = 10;


// Part 3: Callback and Higher-Order Functions (6 Questions)


// 11. Create two functions, first() and second().
// Pass second as a callback to first() and execute it inside first().
function first(callback) {
    console.log("First function");
    callback();
}

function second() {
    console.log("Second function");
}

first(second);


// 12. Create an add(callback, a, b) function that prints the sum
// of two numbers and then calls the callback with two numbers.
function add(callback, a, b) {
    let sum = a + b;

    console.log("Sum:", sum);

    callback(20, 10);
}

function result(num1, num2) {
    console.log("Callback values:", num1, num2);
}

add(result, 5, 10);


// 13. Create a sub(num1, num2) arrow function
// and pass it as a callback to the add() function.
function addNumbers(callback, a, b) {
    let sum = a + b;

    console.log("Sum:", sum);

    callback(20, 5);
}

let sub = (num1, num2) => {
    console.log("Subtraction:", num1 - num2);
};

addNumbers(sub, 10, 20);


// 14. Create a multiply(callback, a, b) function that prints
// the multiplication result and then executes the callback.
function multiply(callback, a, b) {
    let result = a * b;

    console.log("Multiplication:", result);

    callback();
}

function message() {
    console.log("Multiplication completed");
}

multiply(message, 10, 5);


// 15. Create a divide(num1, num2) function
// and pass it as a callback to another function.
function divide(num1, num2) {
    console.log("Division:", num1 / num2);
}

function calculate(callback) {
    console.log("Calculating...");
    callback(20, 5);
}

calculate(divide);


// 16. Create a higher-order function that accepts a callback
// and calls it with a student's name.
function student(callback) {
    let name = "Arun";

    callback(name);
}

function displayStudentName(name) {
    console.log("Student Name:", name);
}

student(displayStudentName);


// Part 4: Generator Functions (5 Questions)


// 17. Create a generator function that yields these values one by one:
// "10% cashback", "30% cashback", and "Better luck next time".
function* cashback() {
    yield "10% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}

let cashbackGenerator = cashback();

console.log(cashbackGenerator.next());
console.log(cashbackGenerator.next());
console.log(cashbackGenerator.next());


// 18. Call .next() three times on a generator object
// and observe the returned values.
function* discountGenerator() {
    yield "10% discount";
    yield "20% discount";
    yield "30% discount";
}

let generator = discountGenerator();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());


// 19. Create a generator function that yields five different discount messages.
// Print each yielded value using a for-of loop.
function* discounts() {
    yield "5% Discount";
    yield "10% Discount";
    yield "15% Discount";
    yield "20% Discount";
    yield "50% Discount";
}

for (let discount of discounts()) {
    console.log(discount);
}


// 20. Create a generator function that yields three student names.
// Use a for-of loop to display them.
function* students() {
    yield "Arun";
    yield "Priya";
    yield "Rahul";
}

for (let name of students()) {
    console.log(name);
}


// 21. Create a generator function with four yield statements.
// Check the done property after the yielded values have been consumed.
function* numbersGenerator() {
    yield 10;
    yield 20;
    yield 30;
    yield 40;
}

let numbers = numbersGenerator();

console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());

// The fifth next() gives:
// { value: undefined, done: true }


// Part 5: Currying and Uncurrying (5 Questions)


// 22. Create a normal function add(a, b, c)
// that prints the sum of three numbers.
function addThree(a, b, c) {
    console.log(a + b + c);
}

addThree(5, 10, 15);


// 23. Convert the add(a, b, c) function into a curried function
// using nested functions.
function curriedAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

console.log(curriedAdd(5)(10)(15));


// 24. Call a curried function with values 5, 10, and 15
// using this format: functionName(5)(10)(15).
function addNumbersCurried(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

let sum = addNumbersCurried(5)(10)(15);

console.log("Sum:", sum);


// 25. Create a curried function that accepts product price,
// discount percentage, and quantity.
// Calculate the total discounted price.
function productPrice(price) {
    return function(discount) {
        return function(quantity) {

            let discountAmount = price * discount / 100;
            let discountedPrice = price - discountAmount;
            let totalPrice = discountedPrice * quantity;

            return totalPrice;
        };
    };
}

let total = productPrice(1000)(20)(3);

console.log("Total Price:", total);


// 26. Write a normal three-parameter function and its curried equivalent.
// Call both with the same values and compare their results.

// Normal function
function normalAdd(a, b, c) {
    return a + b + c;
}

// Curried function
function curriedAddition(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

let normalResult = normalAdd(5, 10, 15);
let curriedResult = curriedAddition(5)(10)(15);

console.log("Normal Result:", normalResult);
console.log("Curried Result:", curriedResult);


// Part 6: IIFE, Return, and Mixed Practice (4 Questions)





// 28. Create a function that returns a number.
// Store the returned value in a variable and print it.
function getNumber() {
    return 100;
}

let number = getNumber();

console.log("Number:", number);


// 29. Create a function that accepts a student's marks and returns the marks.
// Use the returned value in another variable.
function getMarks(marks) {
    return marks;
}

let studentMarks = getMarks(85);

console.log("Student Marks:", studentMarks);


// 30. Create a student fee calculator using a function with a default parameter,
// a callback function to calculate the discount,
// and a return value for the final fee.

function calculateStudentFee(fee = 200000, discountCallback) {

    let discount = discountCallback(fee);

    let finalFee = fee - discount;

    return finalFee;
}

function calculateDiscount(fee) {
    return fee * 20 / 100;
}

let finalFee = calculateStudentFee(200000, calculateDiscount);

console.log("Final Fee:", finalFee);