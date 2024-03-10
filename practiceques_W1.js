//Type conversion

let string= "123"
let number = Number(string);
console.log(typeof number);

let z=5;
let str= String(z);
console.log(typeof str);

let bool= true;
let num= Number(bool);
console.log(typeof num);

// String Manipulation 

let m= "Hello ";
let l= "World";
let k=m+l;
console.log(k);

let js= "javascript"
console.log(js.length);

let str1="hello world"
console.log(str1.slice(0,6));

// Datatype 
let x=10 
console.log(typeof x)

let y = "Hello";
console.log(typeof y); 

// Type checking 
let u= typeof "123"
if (u=="string"){
    console.log("String");
}

let v = typeof 10 
if (v=="number"){
    console.log("Number")
}

let d= typeof true
if (d=="boolean"){
    console.log("Boolean")
}

// Type conversion 
let tc="5"+5
console.log(tc)   // 52

let tc2 = "10"==10  // == checks value only 
console.log(tc2)

let tc3 = "10"===10 // === checks datatype also 
console.log(tc3)