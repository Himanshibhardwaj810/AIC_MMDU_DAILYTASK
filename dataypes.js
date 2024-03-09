var a = "Hello "
let b = 45
const c = 9
var d = b + c
const islogged=false;
let user;
const id=Symbol('123');
const id2=Symbol('123');
const bigNumber=6554275768658736n//bigInt

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(islogged);
console.log(id===id2);//as symbol provides unique value
console.log(bigNumber);
//arrays
const fruits=["apple","banana",'orange'];
// //object
// let myobj={
//     name:himanshi,
//     age:23,
// }
//function
const greetings = function(){
    console.log("hello");
}
const type_check=null//object
console.log(typeof type_check);
console.log(typeof bigNumber);
console.log(typeof greetings);