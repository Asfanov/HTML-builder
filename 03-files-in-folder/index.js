const path = require('path');
const fs = require('fs');
 
const pathDir = path.join(__dirname, 'secret-folder'); 
// console.log(pathDir);

fs.readdir(pathDir,{withFileTypes: true}, (err, files) => {
    if (err) console.log(err);
    else {
      files.forEach(file => {
        fs.stat(`${pathDir}/${file.name}`, (err, stats) => {
            if(err) console.log(err);
            else {
                if(stats.isFile() != true){
                    //  console.log('не файл ' + file.name);
                } else {
                    console.log(file.name.replace(/.\w*$/i,'') + ' - ' +  file.name.replace(/^\w*./i,'') + ' - ' + stats.size/1000 + 'kb');
                }
            }
        });
      })
    }
})




 

