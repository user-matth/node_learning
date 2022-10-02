const inquirer = require('inquirer')
const chalk = require('chalk')

inquirer.prompt([
    {
        name: 'nome',
        message: "What's your name? "
    },{
        name: 'age',
        message: "What's your age? "
    }
]).then((answers) => {
    // console.log(answers)
    if(answers.age === '' || answers.nome === ''){
        console.log(chalk.bgRed.black(`Fill all the blanks!`))
    } else {
        console.log(chalk.bgYellow.black(`Hello, ${answers.nome} you have ${answers.age} years old!`))
    }
}).catch(err => console.log(err))
