// var hello = "Hello";
// console.log(hello);

var hello = "Hello";
let world = "Hello world";
const helloWorld = "Hello World!";

const anotherFunction = () => {
  console.log(hello);
  console.log(world);
  console.log(helloWorld);
}

anotherFunction();

//No se debe hacer los siguiente:----------------
const helloWorld = () => {
  globalVar = "Im global";
}

helloWorld();
console.log(globalVar);

//---------------------------------
const anotherFunction = () =>{
  var localVar = globalVar = "Im global!!!!";
}

anotherFunction()
console.log(globalVar);