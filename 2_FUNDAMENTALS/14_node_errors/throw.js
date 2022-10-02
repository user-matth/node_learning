const num1 = 10

// check if num1 is a number
if(!Number.isInteger(num1)){
    throw new Error('Your number is not from type integer!') // throw end the process 
}

console.log('Code running...')