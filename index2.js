const path = require('path');
const fs = require('fs');
 
const targetDirectory = 'D:\\Nick\\dev_vids\\Gatsby_WordPress';

let fileSequencer = 0;
fs.readdir(targetDirectory, function(err, dirs){
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
 //   console.log(dirs);
    let primaryDir = path.join(targetDirectory, dirs[0]);
 //   console.log(primaryDir);
    fs.readdir(primaryDir, function(err, files){
       if(err) {
        return console.log('Unable to scan directory to count files: ' + err);    
       }
       files.forEach(function(file){
         fileXt = file.substring(file.length -3);
         let numFiles = [];
         if(fileXt === 'mp4'){
        console.log('we got files');
         }

       }
     );
   });
}
);


//loop through directories

//if directory has prefix, loop through files

//rename files based on 