const path = require('path');
const fs = require('fs');
 
const targetDirectory = 'D:\\Nick\\dev_vids\\Gatsby_WordPress';
let filesArray = [];
let oldArray = [];
let prefix = 1;



fs.readdir(targetDirectory, function(err, dirs){
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    console.log(dirs);
    dirs.forEach(function (direct){
        directPath = path.join(targetDirectory, direct);
        fs.readdir(directPath, function(err, files){
            files.forEach(function(file){
            filePath = path.join(targetDirectory, direct, file);
            fileExt = path.extname(filePath);
            if(fileExt === '.mp4'){
                newName = file.replace(/^\d+\./, prefix);
                newPath = path.join(targetDirectory, direct, newName);
            //    currDir = path.dirname(file);
                filesArray.push(newPath);
                oldArray.push(filePath);
                fs.rename(filePath, newPath, (err) => {
                    if (err) throw err;
                    console.log('Rename complete!');
                });
                prefix++;
             
         //  
          console.log(oldArray);   
            }
        

      //      console.log(filesArray);
            }
            );//end for each file
        });

    }

    );
    //end for each


    
});//end fs readdir

