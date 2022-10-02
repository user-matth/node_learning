// declaring variables
const x = 20
const y = "Matheus"
const z = [1, 2]
console.log(x, y, z)

// counting prints
console.count(`The value of x is: ${x}, counting`)
console.count(`The value of x is: ${x}, counting`)
console.count(`The value of x is: ${x}, counting`)
console.count(`The value of x is: ${x}, counting`)

// variable between strings
console.log("His name is %s, he's a programmer", y)

// clear console
setTimeout(() => {
    console.clear()
}, 2000);