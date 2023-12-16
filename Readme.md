**TypeScript Supermart Application**
A simple TypeScript console application for a supermart, featuring a menu-driven interface, item selection, quantity input, and a checkout process with discount offers.

**Table of Contents**
Introduction
Features
Usage
**Functions**
Add Function
Even and Odd Function
Area Function
Reverse String Function
Convert Celsius to Fahrenheit Function
**Array Operations**
Push
Pop
Shift
Unshift
Splice
Slice
Tasks Completed
License
**Introduction**
Welcome to the TypeScript Supermart Application! This console application provides a simple shopping experience with a menu-driven interface and various functions for calculations and array operations.

**Features**
Menu-driven interface for selecting items from different categories.
Quantity input for selected items with associated prices.
Checkout process with discount offers based on the total bill amount.
Additional functions for mathematical calculations and array operations.
**Usage**
Clone the repository.
Ensure you have TypeScript installed: npm install -g typescript.
Compile the TypeScript code: tsc filename.ts.
Run the compiled JavaScript file using Node.js: node filename.js.

**Functions**

**Add Function**
**typescript
Copy code**
function add(a: number, b: number): number {
    return a + b;
}

let result = add(10, 2);
console.log('Sum is:', result);
**Even and Odd Function**
typescript
Copy code
function EvenOdd(a: number): void {
    if (a % 2 === 0) {
        console.log(`${a} is even`);
    } else {
        console.log(`${a} is odd`);
    }
}

EvenOdd(7);
**Area Function**
typescript
Copy code
function Area(height: number, width: number): string {
    let area = height * width;
    return `Area of rectangle is ${area}`;
}

let rect_area = Area(5.6, 4);
console.log(rect_area);

**Reverse String Function**
typescript
Copy code
function reverseString(str: string): string {
    let reversedStr = str.split("").reverse().join("");
    return reversedStr;
}

let strReverse = reverseString("My name is Ahmed Khan!");
console.log(strReverse);

**Convert Celsius to Fahrenheit Function**
typescript
Copy code
function convertCelsiusToFahrenheit(celsius: number): string {
    let fahrenheit = ((celsius * 9 / 5) + 32).toFixed(2);
    return `${fahrenheit} degree Fahrenheit`;
}

let celsius = convertCelsiusToFahrenheit(38);
console.log(celsius);

**Array Operations**

**Push**
typescript
Copy code
arr.push(99);
console.log("Array after push: " + arr);
Pop
typescript
Copy code
console.log(arr.pop());

**Shift**
typescript
Copy code
arr.shift();
console.log("After removing first element: " + arr);

**Unshift**
typescript
Copy code
arr.unshift(100, 200);
console.log("After adding elements to beginning: " + arr);

**Splice**
typescript
Copy code
const spliced = arr.splice(2, 2);
console.log("After deleting two elements from index 2 and remaining subarray after splice: " + spliced);

**Slice**
typescript
Copy code
const sliced = arr.slice(1, 3);
console.log("Sliced array between indexes 1 and 3: " + sliced);

**Tasks Completed**
 Task 1: TypeScript Supermart Application
 Task 2: Additional Functions
 Task 3: Array Operations

 
**License**
This project is licensed under the MIT License - see the LICENSE.md file for details.
