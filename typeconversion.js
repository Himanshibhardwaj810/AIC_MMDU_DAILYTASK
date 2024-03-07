//Conversion into Number
let a=45;
console.log(typeof a);

let id = "123abc"
console.log(typeof(id));

let rahul_id="1122cggt"
let valueinNumber= Number(rahul_id)
console.log(typeof (valueinNumber));

console.log(valueinNumber);//not a number

let account= null;
let balance=Number(account);
console.log( typeof balance);
console.log(balance);

let account1= undefined;
let balance1=Number(account1);
console.log( typeof balance1);
console.log(balance1);
// "33" => 33(number)
// "33abc" =>NaN
// undefined => NaN
// null=> 0
// true=>1
// false=>0

//Conversion into Boolean
let b=1;
let Booleanconversion=Boolean(b);
console.log(Booleanconversion);

let c=0;
let Booleanconversion2=Boolean(c);
console.log(Booleanconversion2);

let d="";
let Booleanconversion3=Boolean(d);
console.log(Booleanconversion3);

let e="Himanshi";
let Booleanconversion4=Boolean(e);
console.log(Booleanconversion4);

// 1=>true
//0=>false
//""=>false
//"hello"=>true

//Conversion into String
let f=67;
let somevalue=String(f);
console.log( typeof somevalue);
console.log(somevalue);
