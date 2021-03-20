const fs = require("fs")
const path = require("path")
const targetDirectory = 'D:\\Nick\\dev_vids\\Gatsby_WordPress';
 
const getAllFiles = function(targetDirectory, arrayOfFiles) {
  files = fs.readdirSync(targetDirectory);
 
  arrayOfFiles = arrayOfFiles || [];
 
  files.forEach(function(file) {
    if (fs.statSync(targetDirectory + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(targetDirectory + "/" + file, arrayOfFiles)
    } else {
      arrayOfFiles.push(path.join(__dirname, dirPath, "/", file))
    }
  })
 
  return arrayOfFiles
}