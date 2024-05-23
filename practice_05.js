/*fetch("http://cricket.com/", {
 "method" : "POST",
 "body" : "match score"
}).then(function(HTTPResponse){

    console.log("We got the response from cricket.com",HTTPResponse)

}).catch(function(ErrorResponse){

console.log('Error occured while fetching the data from cricket.com',ErrorResponse)
})

const P = new Promise(function(resolve,reject){

resolve("Promise is resolved")
})
const q=async function(){
    const data = await P 
    console.log(data)
}    
q()

// make a case in whicdh use spread operator in object and array
const obj1 = {
    name: "Shubham",
    age: 21
}  
//const obj3=obj1
//obj3.name="Rahul"
//console.log(obj1.name)
const obj2 = {
    ...obj1,
    city: "Delhi"
}
console.log(obj2)
const arr1 = [1,2,3,4]
const arr2 = [...arr1,5,6,7]
console.log(arr2)
*/
const P = new Promise(function(resolve,reject){

    resolve("Promise is resolved")
    })
    
        const data = await P 
        console.log(data)
    
   
    