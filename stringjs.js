const str= new String("hello web developers")
console.log(str)


const firtsName= "Himanshi"
const lastName="Bhardwaj"
console.log(`My name is ${firtsName} ${lastName} `)


console.log(firtsName.length);
console.log(firtsName.toUpperCase());
console.log(lastName.toLowerCase());
console.log(firtsName.charAt(2)); // checks what is present on given index
console.log(firtsName.indexOf("a")); // checks index


// slicing
console.log(firtsName.substring(0,9));  
const str1= firtsName.slice(-4,4); // can include negative value/indexing 
console.log(str1);

const str2= "   hello    ";
console.log(str2);
console.log(str2.trim()); // removes whitespace and line terminators
const url = "https://hello.com/world%20!!";
console.log(url.replace('%20','.com')); // replaces text
console.log(url.includes("hlo"));


// string to Array 
const string="hello web developers at Alpha Intern";
const string2 ="So-happy-to-see-you";
console.log(string.split(" "));
console.log(string2.split("-"));