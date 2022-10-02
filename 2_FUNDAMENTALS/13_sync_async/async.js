const fs = require('fs')
console.log('Start')
fs.writeFile('archive.txt', 'hey', function(err){
    setTimeout(function(){
        console.log('Your archive has been created!')
    }, 1000);
})
console.log('The End')