const path = require('path');
const fs = require('fs');
 
const targetDirectory = 'D:\\Nick\\dev_vids\\Gatsby_WordPress';
let filesArray = [];
let newArray = [];
let prefix = 1;

fs.readdir(targetDirectory, function(err, dirs){
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
 //   console.log(dirs);
    dirs.forEach(function(direct){
        directPath = path.join(targetDirectory, direct);    
      //  console.log(directPath);
        fs.readdir(directPath, function(err, files){
            if (err){
                return console.log('you borked it');
            }
            files.forEach(function(file){
                fileExt = path.extname(file);
                fileDir = path.dirname(direct);
                console.log(fileDir);
                //console.log(fileExt);
                if(fileExt === '.mp4'){
                    newName = file.replace(/^\d+\./, prefix);
                //    currDir = path.dirname(file);
                    filesArray.push(newName);
                    prefix++;
                 
                console.log(filesArray);   
                }
            });
          
        });
//        console.log(filesArray); 

   
        
    }
    
    );


});

