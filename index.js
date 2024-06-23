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
