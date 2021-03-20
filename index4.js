
const path = require('path');
const fs = require('fs');
filesArray = [];
files = ['1. Some file name.mp4', '2. Some file name.mp4', '11. Some file name.mp4','10. Some file name',];
prefix = 1;

files.forEach(function(file){
    fileExt = path.extname(file);
    if(fileExt === '.mp4'){
    //newFile = file.replace(/^\d+\.\s+/, prefix);  
    newFile = file.replace(/^\d+\./, prefix);
    
    filesArray.push(newFile);
    prefix++;
    }
        
           

        
  //  file1 = path.join(directPath, file);
   // for (i = 1 )
   // newArray.push(newFile);
    console.log(filesArray);  

});
