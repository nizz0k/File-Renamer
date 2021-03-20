const path = require('path');
const fs = require('fs');
//joining path of directory 
const directoryPath = path.join(__dirname, 'Documents');
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        suffix = file.substring(file.length -3);
        if(suffix === "txt"){
            prefix = file.charAt(0);
            console.log(prefix);
            if(!isNaN(prefix)){
                newPre = prefix++;
                newFile = file.replace(newPre, prefix);
                console.log(newFile);
                file1 = path.join(directoryPath, file);
                newFile1 = path.join(directoryPath, newFile);
                fs.rename(file1, newFile1, function(err){
                    if(err) throw err;
                    console.log('it worked, mofo!');
                })
                
            }
        
        } 
    });
});



