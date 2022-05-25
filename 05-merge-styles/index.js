const path = require('path');
const fs = require('fs');

const dirPath = path.join(__dirname,'');
const projectPath = path.join(__dirname, 'project-dist');
const newFile = path.join(__dirname, 'project-dist', 'bundle.css');
const styleDir = path.join(__dirname, 'styles');

console.log(projectPath);

fs.writeFile(
    newFile, '', (err) => {
        if (err) throw err;
        console.log('Файл был создан');
    }
);

function checkFile() { //перебор всех файлов в папке
    fs.readdir(styleDir, (err, items) => {
        if(err) throw err;
        for(let i of items){
            console.log(i);
            checkFileExt(i)
        }
    })
}
checkFile()

function checkFileExt(item) { //проверяю на окончание файла
    const regex = /.css$/;
    if(regex.test(item)) {
        console.log('подходит');
        copyContent(item)
    } else {
        console.log('не подходит');
    }
};

function copyContent(i) {
    let arr = [];
    fs.readFile(`${styleDir}/${i}`, 'utf-8', (err, data) => {
        if (err) throw err;
        else{
             arr.push(data);
             fs.appendFile(newFile, `${arr.join('')}`, err => {
                if(err) throw err;
                else{
                    console.log('файл изменен');
                }
            })
        }
    })
}