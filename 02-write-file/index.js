const path = require('path');
const fs  = require('fs');
const readline = require('readline');
const process = require('process');

const fileHelloPath = path.join(__dirname, 'hello.txt');//путь до файла
const writeFile = fs.createWriteStream('hello.txt'); // создание файла

console.log('hello, enter text');

const { stdin: input, stdout: output } = require('process');
const rl = readline.createInterface({ input, output });


rl.on('line', (input) => {
    if(input.toLowerCase() === 'exit') {
        exit();
    }  else addtext(input + '\n');
})

rl.on('SIGINT', () =>{
     exit();
    });

 
function exit(){ 
    console.log('bye');
     rl.close()
}

function addtext(x) { // запись в файл
   fs.appendFile(fileHelloPath, x, err => {
       if(err) throw err;
   })
}
