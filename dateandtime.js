//Dates
let today= new Date();
console.log(today);
console.log(today.toDateString());
console.log(today.toISOString());
console.log(today.toLocaleDateString());
console.log(today.toString());
console.log(today.toJSON());
console.log(typeof today);

let created_date= new Date(2004,9,8);// The months in Javascript starts with 0
console.log(created_date.toDateString());

let created_date1= new Date(2004,9,8,11,30);// To insert time as well
console.log(created_date1.toLocaleString());

let created_date2= new Date("2006-10-7");// Here month start with 1
console.log(created_date2.toLocaleString());


//Time
let delay= Date.now()//Generates long value from 1970
console.log(delay);
console.log(created_date.getDate());//get time date day month
console.log(created_date.getDay());
console.log(created_date.getMonth() +1);

console.log(created_date.getTime());//SImilarly returns value in long

console.log(Math.floor(Date.now()/1000));//to convert into seconds

`${created_date.getDate()}`

created_date.toLocaleString('default',{
    weekday: "long",
    timeZone:'UTC'
})