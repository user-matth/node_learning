const minimist = require('minimist')

const args = minimist(process.argv.slice(2))
console.log(args)

const name = args['name']
const job = args['job']
// console.log(name, job)

console.log(`Hello ${name}, you work as a ${job}, that's nice!`)