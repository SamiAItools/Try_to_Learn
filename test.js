/*
for(let i=0;i<5;i++){
    setTimeout(
      ()=>console.log(i),
      1000)
  } // prints 0,1,2,3,4
  
  for(var i=0;i<5;i++){
    setTimeout(
      ()=>console.log(i),
      1000)
  } // prints 5,5,5,5,5

  
  console.log(summ(1,2,3));
  const summ=function sum(a, b, c){
    var count = 0;
    return a + b + c;
   }

const person = {};
person.name = "abhishe"; 
console.log(person.name)

const cities = []; 
cities.push("mumba");
console.log(cities)

//var c=43;
//var c=44;
{ // block scope
    let x = 0;
    let y = 0;
    console.log(x); // 0
    let x = 1; // Error
  }
  
  {
    let x = 1;
    let y = 1;
    x = 2;
    console.log(x);// 2
  }
  
  console.log(x); // Error

  let words = "hello_world"
    let chars = words.split("_");
    console.log(chars);

    console.log(typeof(words));
 
 let a=0
 a+=2
 a=a+2
    console.log(a)
     */