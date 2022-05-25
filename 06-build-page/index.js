const path = require('path');
const fs = require('fs');

const newFolder = path.join(__dirname, 'project-dist');
const IndexHTML = path.join(__dirname, 'project-dist', 'index.html');
const styleDir = path.join(__dirname, 'styles');
const newFile = path.join(__dirname, 'project-dist', 'style.css');


fs.mkdir(newFolder, { force: true, recursive: true }, err => {
    if (err) throw err;
    else console.log('папка создана');
})

function newFileInProjectDist(fileName) { //создание файла внутри папки project - dist
    fs.writeFile(path.join(__dirname, 'project-dist' ,fileName), '',
    err => {
        if (err) throw err;
        else console.log('файл создан: ' + fileName);
    })
 }
newFileInProjectDist('index.html');
newFileInProjectDist('style.css');


function copyContent() { //копируем в файл index.html
    let arr = [];
    fs.readFile(path.join(__dirname, 'template.html'), 'utf-8', (err, data) => {
        if (err) throw err;
        else{
             arr.push(data);
             fs.appendFile(IndexHTML, `${arr.join('')}`, err => {
                if(err) throw err;
                else{
                    console.log('файл изменен');
                    checkIndex()
                }
            })
        }
    })
}
 copyContent();

function checkIndex() {
    let arr = [];
    fs.readFile(IndexHTML, 'utf-8', (err, data) => {
         if (err)  throw err;
        else {
           console.log(typeof data);
           if (data.includes('{{header}}') === true) {
                // data.replace('{{header}}', )      
                console.log(true);         
           }
        }
     })
}












//функции из 5-го задания для переноса css стилей

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
        copyContentStyle(item)
    } else {
        console.log('не подходит');
    }
};

function copyContentStyle(i) {
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
//стили работают