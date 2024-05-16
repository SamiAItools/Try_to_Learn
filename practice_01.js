/*let numbers = [1,2,3,4,5,6]
numbers.push(100)
console.log(numbers)
let i=numbers.indexOf(100)
console.log(i)



// Path: practice_02.js
let numbers = [1,2,3,4,5,6]
let numbers2 = [7,8,9,10]
let result = numbers.concat(numbers2)
numbers.push(100)
numbers2.pop()
console.log(result)
console.log(numbers)
console.log(numbers2)

// take a array and apply for loop with jump of 2
let numbers = [1,2,3,4,5,6,7,8,9,10]
for (let i = 0; i < numbers.length; i+=4) {
    console.log(numbers[i])
}

// write a code for while loop
let numbers = [1,2,3,4,5,6,7,8,9,10]
let i = 0
while (i < numbers.length) {
    console.log(numbers[i])
    i++
}

// write a CODE FOR BREAK AND CONTINUE
let numbers = [1,2,3,4,5,6,7,8,9,10]
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == 5) {
        break
    }
    console.log(numbers[i])
}
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == 5) {
        continue
    }
    console.log(numbers[i])
}

// WRITE A CODE FOR IF ELSE LADDER
let numbers = [1,2,3,4,5,6,7,8,9,10]
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == 5) {
        console.log(2,numbers[i] + " is 5")
    } else if (numbers[i] == 6) {
        console.log(numbers[i] + " is 6")
    } else if (numbers[i] == 7) {
        console.log(numbers[i] + " is 7")
    } else {
        console.log(numbers[i] + " is not 5,6,7")
        break
    }
}

// write a code for switch case
let numbers = [1,3,4,5,6,7,8,9,10]
for (let i = 0; i < numbers.length; i++) {
    switch (numbers[i]) {
        case 5:
            console.log(numbers[i] + " is 5")
            break
        case 6:
            console.log(numbers[i] + " is 6")
            break
        case 7:
            console.log(numbers[i] + " is 7")
            break
        default:
            console.log(numbers[i] + " is not 5,6,7")
            break
    }
}
// write a code for function
function add(a,b) {
    return a+b
}
console.log(add(2,3))
*/