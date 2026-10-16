# js_task3

# JavaScript Functions Task

## Part 1: Functions and Parameters

### 1. Welcome Function
Create a function `welcome()` that prints `"Welcome to JavaScript"`.

### 2. Student Details
Create a function `studentDetails(name, age, cgpa)` that prints all three values. Call it with two different students.

### 3. Calculate Fee
Create a function `calculateFee(fee)` that returns the student fee. Store the returned value in a variable and print it.

### 4. Discount Function
Create a function `discount(percent)` that calculates a discount on a fee of ₹200,000 and prints the final fee.

### 5. Student Form
Create a function `studentForm(name, age, disability = "no")`. Call it three times, including once without passing the disability argument.

---

## Part 2: Function Types and Scope

### 6. Named Function
Create a named function that accepts a message and prints it.

### 7. Anonymous Function
Create an anonymous function and store it in a variable. Pass a name to it and print the name.

### 8. Arrow Function
Create an arrow function that accepts a number and prints it.

### 9. Variable Scope
Create a function containing `var`, `let`, and `const` inside an `if` block. Check which variables can be accessed inside and outside the block.

### 10. Hoisting
Predict the output of the following code:

```javascript
console.log(value);
var value = 10;
```

---

## Part 3: Callback and Higher-Order Functions

### 11. Callback Function
Create two functions, `first()` and `second()`. Pass `second` as a callback to `first()` and execute it inside `first()`.

### 12. Add Function with Callback
Create an `add(callback, a, b)` function that prints the sum of two numbers and then calls the callback with two numbers.

### 13. Subtraction Callback
Create a `sub(num1, num2)` arrow function and pass it as a callback to the `add()` function.

### 14. Multiplication with Callback
Create a `multiply(callback, a, b)` function that prints the multiplication result and then executes the callback.

### 15. Division Callback
Create a `divide(num1, num2)` function and pass it as a callback to another function.

### 16. Higher-Order Function
Create a higher-order function that accepts a callback and calls it with a student's name.

---

## Part 4: Generator Functions

### 17. Cashback Generator
Create a generator function that yields these values one by one:

- `"10% cashback"`
- `"30% cashback"`
- `"Better luck next time"`

### 18. Using `.next()`
Call `.next()` three times on a generator object and observe the returned values.

### 19. Discount Generator
Create a generator function that yields five different discount messages. Print each yielded value using a `for-of` loop.

### 20. Student Name Generator
Create a generator function that yields three student names. Use a `for-of` loop to display them.

### 21. Generator `done` Property
Create a generator function with four `yield` statements. Check the `done` property after the yielded values have been consumed.

---

## Part 5: Currying and Uncurrying

### 22. Normal Add Function
Create a normal function `add(a, b, c)` that prints the sum of three numbers.

### 23. Curried Add Function
Convert the `add(a, b, c)` function into a curried function using nested functions.

### 24. Call Curried Function
Call a curried function with values `5`, `10`, and `15` using this format:

```javascript
functionName(5)(10)(15);
```

### 25. Curried Product Price Calculator
Create a curried function that accepts:

- Product price
- Discount percentage
- Quantity

Then calculate the total discounted price.

### 26. Normal vs Curried Function
Write a normal three-parameter function and its curried equivalent. Call both with the same values and compare their results.

---

## Part 6: IIFE, Return, and Mixed Practice

### 27. IIFE Sale Message
Create an IIFE that accepts a product name and discount percentage, then displays a sale message using a template string.

### 28. Return a Number
Create a function that returns a number. Store the returned value in a variable and print it.

### 29. Student Marks
Create a function that accepts a student's marks and returns the marks. Use the returned value in another variable.

### 30. Student Fee Calculator
Create a student fee calculator using:

- A function with a default parameter
- A callback function to calculate the discount
- A return value for the final fee

---

## Topics Covered

- Functions
- Function Parameters
- Return Values
- Default Parameters
- Named Functions
- Anonymous Functions
- Arrow Functions
- Variable Scope
- `var`, `let`, and `const`
- Hoisting
- Callback Functions
- Higher-Order Functions
- Generator Functions
- `yield`
- `.next()`
- `done`
- `for-of`
- Currying
- Uncurrying
- IIFE
- Template Strings
- Default Parameters
