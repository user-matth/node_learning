const inquirer = require('inquirer')

inquirer.prompt([
    {
        name: 'p1', 
        message: 'What is the first grade?',
    },
    {
        name: 'p2',
        message: 'What is the second grade?',
    },
]).then((answers) => {
    console.log(answers)
    const media = ((parseInt(answers.p1) + parseInt(answers.p2)) / 2)
    console.log(`A sua média é ${media}`)
}).catch(err => console.log(err))