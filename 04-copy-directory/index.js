const path  = require('path');
const fs = require('fs');

const newFolder = path.join(__dirname,'files-copy');
const dirFilesPath = path.join(__dirname, 'files');


const createFolder = fs.mkdir(newFolder, { force: true, recursive: true }, err =>{
    if (err) throw err
    console.log('создана');
});

fs.readdir(dirFilesPath,{withFileTypes: true}, (err, files) => { 
    if (err) throw err;
    else {
       for( let x of files) {
           fs.copyFile(`./04-copy-directory/files/${x.name}`, `${newFolder}/${x.name}` , err => {
               if (err) throw err;
               console.log('файл скопирован');
           })
       }
    }
});
