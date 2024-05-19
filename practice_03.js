/*function makeFunc() {
    const name = "Mozilla";
    function displayName() {
    console.log(name);
    }
    return displayName;
   }

   const myFunc = makeFunc();
   myFunc();
 
(
    function(name) {
    console.log('Hello, World!',name);
}('sami')
);

 let x=function(name ,id,age) {
    console.log('Hello, World!',name,id,age);
 }
 setTimeout(x, 3000,'sami',1,22);
  
  setInterval(function(name ,id,age) {
    console.log('Hello, World!',name,id,age);
}
, 3000,'sami',1,22);

// make a obj of person
let person = {
    name: 'sami',
    id: 1,
    age: 22,
    display: function() {
        console.log(`Hello ${this.name} your id is ${this.id} and your age is ${this.age}`)
    }
}
console.log(person.name);
console.log(person['age'])

setTimeout(function() {
    console.log('Hello, World!');
}, 3000);

// make a nested obj of person
let person = {
    name: 'sami',
    id: 1,
    age: 22,
    display: function() {
        console.log(`Hello ${this.name} your id is ${this.id} and your age is ${this.age}`)
    },
    address: {
        city: 'Islamabad',
        country: 'pakistan',
        postalCode: 44000,
    }
}
console.log(person?.address?.city);
console.log(person)
delete person.id;
delete person.address.postalCode;
console.log(person)

let numbers=[1,2,3,4,5,6,7,8,9,10];
// apply for loop on numbers array
for(let i=0; i<numbers.length; i++) {
    console.log(numbers[i]);
}

let numbers=[1,2,3,4,5,6,7,8,9,10];
// apply forEach on numbers array
numbers.forEach((number)=>console.log(number))
 
// use math library and its functions and import math library and atleast apply 10 functions
// 1. Math.abs()
let x=-10;
console.log(Math.abs(x));
// 2. Math.ceil()
let y=10.5;
console.log(Math.ceil(y));
// 3. Math.floor()
let z=10.5;
console.log(Math.floor(z));
// 4. Math.max()
let a=10;
let b=20;
console.log(Math.max(a,b));
// 5. Math.min()
let c=10;
let d=20;
console.log(Math.min(c,d));
// 6. Math.pow()
let e=2;
let f=3;
console.log(Math.pow(e,f));
// 7. Math.random()
console.log(Math.random());
// 8. Math.sqrt()
let g=9;
console.log(Math.sqrt(g));
// 9. Math.trunc()
let h=10.5;
console.log(Math.trunc(h));
// 10. Math.round()
let xg=10.5;
console.log(Math.round(xg));
 */