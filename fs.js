const fs = require('fs');
const path = require('path');
const { stringify } = require('querystring');

// File path
const filePath = path.join(__dirname, 'nlci0000institute.txt');

// 1. Reading a File****************************************************************
function readFile(file) {
  try {
    const data = fs.readFileSync(file, 'utf8');
    console.log('File contents:', data);
  } catch (err) {
    console.error('Error reading file:', err);
  }
}
// readFile(filePath)




// 2. Writing to a File----------------------------------------------------------------
function writeFile(file, content) {
  try {
    fs.writeFileSync(file, content, 'utf8');
    console.log('File has been written');
  } catch (err) {
    console.error('Error writing file:', err);
  }
}
// writeFile(filePath,"hello world kavita maurya");

obj ={
  name:"ram"
}

// 3. Appending to a File
function appendFile(file, content) {
  try {
    fs.appendFileSync(file, content, 'utf8');
    console.log('Text has been appended');
  } catch (err) {
    console.error('Error appending file:', err);
  }
}

// appendFile(filePath,stringify(obj));



// // 4. Deleting a File********************************************************************
function deleteFile(file) {
  try {
    fs.unlinkSync(file);
    console.log('File has been deleted');
  } catch (err) {
    console.error('Error deleting file:', err);
  }
}

// deleteFile("kavi.txt")




// // 5. Renaming a File********************************************************************
function renameFile(oldPath, newPath) {
  try {
    fs.renameSync(oldPath, newPath);
    console.log('File has been renamed');
  } catch (err) {
    console.error('Error renaming file:', err);
  }
}
// renameFile(filePath, "nlci0000institute.txt");







// // 6. Reading Directory Contents**********************************************
function readDirectory(directory) {
  try {
    const files = fs.readdirSync(directory);
    console.log('Directory contents:', files);
  } catch (err) {
    console.error('Error reading directory:', err);
  }
}

// readDirectory(__dirname);


// // 7. Checking File or Directory Existence***********************************************
function checkFileExists(file) {
  const exists = fs.existsSync(file);
  console.log('File exists:', exists);
}
// checkFileExists(filePath);




// // 8. Getting File Information***************************************************
function getFileStats(file) {
  try {
    const stats = fs.statSync(file);
    console.log('File size:', stats.size);
    console.log('Is file:', stats.isFile());
    console.log('Is directory:', stats.isDirectory());
  } catch (err) {
    console.error('Error getting file stats:', err);
  }
}
getFileStats(filePath)



// // 9. Creating a New Directory***********************************************************
// // Example Usage
// writeFile(filePath, 'Hello, Node.js!');
// readFile(filePath);
// appendFile(filePath, '\nAppended text!');
// readFile(filePath);
// getFileStats(filePath);
// checkFileExists(filePath);
// renameFile(filePath, path.join(__dirname, 'renamed.txt'));
// deleteFile(path.join(__dirname, 'renamed.txt'));
// readDirectory(__dirname);
