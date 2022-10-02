const chalk = require('chalk')

const grade = 6

if (grade >= 7){
    console.log(chalk.green.bold('Congratulations! You are approved!'))
} else {
    console.log(chalk.bgRed.black("I'm sorry, you'll need to do another exam!"))
}
