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
