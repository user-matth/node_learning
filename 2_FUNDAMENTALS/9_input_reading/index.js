const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('Qual a sua linguagem preferida? ', (language) => {
    if(language === 'HTML' || language === 'CSS'){
        console.log(`Isso nem é linguagem kkkkkkk`)
    } else {
        console.log(`A minha linguagem preferida é ${language}`)
    }
    readline.close()
})