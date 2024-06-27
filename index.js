const obj = {
 name: "Alice",
  sayHello(){
    console.log(this.name); // "Alice"
  }
};

obj.sayHello();

let outsideFunc = 2;

function printoutsideFunc() {
  outsideFunc = 7
  console.log(outsideFunc);
}

printoutsideFunc();

let a = [4, 5, 6, 7, 8]
let b = a
console.log(b === a);
a = [5, 7, 8]
console.log(b)


//// shallow vs Deep Copy
/*
1.> Shallow Copy: Creates a new object/array, but the references to nested objects or arrays within it are copied, not the objects/arrays themselves.

2.> Deep Copy: Creates a new object/array and recursively copies all nested objects and arrays, effectively creating an entirely independent copy.

Shallow Copy: If you modify a nested object or array in the copy, it will also affect the original object because they share the same reference.
Deep Copy: Changes to a nested object or array in the copy won't impact the original because they are completely separate entities.
*/


const original = { a: 1, b: { c: {d: 6} } };
const deepCopy = structuredClone(original);
const shallowCopy = {... original}
console.log("Deep copy object", deepCopy === original);
console.log('shallow copy object', shallowCopy === original);
console.log("Inside Object Shallow Copy", shallowCopy.b.c === original.b.c);
console.log("Inside Deep copy Object", original.b.c === deepCopy.b.c);









// Copy Using spread operator
const orignalArray = [1, 2, 3, 4, 5];
const orignalArrayCopy = orignalArray;
const orignalArrayCopyBySpread = [...orignalArray];
console.log(orignalArray === orignalArrayCopy);
console.log(orignalArray === orignalArrayCopyBySpread);

let car = {
    brand: 'Honda',
    getBrand: function () {
        return this.brand;
    }
}

console.log(car.getBrand());
let brand = car.getBrand;
console.log(brand()); // undefined

/*
The reason brand() returns undefined is due to how the this keyword works in JavaScript and how you're calling the function.

Understanding this

In JavaScript, the value of this inside a function depends on how the function is called:

Method Invocation: When a function is called as a method of an object (e.g., car.getBrand()), this refers to the object itself (car in this case).
Function Invocation: When a function is called directly (e.g., brand()), this refers to the global object (usually window in browsers or global in Node.js).
The Problem

In your code:

console.log(car.getBrand()):  This works as expected because getBrand is called as a method of the car object.  Therefore, this inside getBrand refers to the car object, and the correct brand ('Honda') is returned.

let brand = car.getBrand: Here, you're not calling the function, but rather assigning the function itself to the brand variable. This loses the context of the original car object.

console.log(brand()): Now, when you call brand(), it's a regular function invocation, not a method invocation. Since the function is no longer associated with the car object, this refers to the global object, which doesn't have a brand property. Hence, undefined is returned.

Solution:

To fix this, you need to preserve the binding of the this keyword to the car object. Here are a couple of ways to do that:

1. Using bind():

JavaScript
let brand = car.getBrand.bind(car); 
console.log(brand()); // Output: Honda
Use code with caution.
content_copy
The bind() method creates a new function where this is permanently bound to the specified object (car in this case).

2. Using an Arrow Function:

JavaScript
let car = {
    brand: 'Honda',
    getBrand: () => {  // Arrow function
        return this.brand; 
    }
}

let brand = car.getBrand;
console.log(brand()); // Output: Honda
Use code with caution.
content_copy
Arrow functions inherit the this value from the surrounding scope. Since the arrow function is defined within the car object, this inside the arrow function will always refer to the car object.

Explanation:
In this example, bind() method creates a new function brand that is permanently bound to the car object. When brand() is called, the this value inside the function is set to the car object, ensuring that this.brand correctly refers to the brand property of the car object.
*/