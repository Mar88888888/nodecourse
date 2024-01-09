const fs = require("fs");
const readline = require('readline');
const Lodash = require('lodash');
// Read the file data and return the data in the resolved Promise
const read = (fileName) => {
  return new Promise((resolve, reject) => {
    let err = null;
    let resultData = [];
    const file = readline.createInterface({
      input: fs.createReadStream(fileName)
    });
    file.on('line', (line) =>{
      const arr = line.split(',');
      resultData = arr;
    });
    file.on('close', () => {
      console.log(resultData);
      resolve(resultData);
    });
    file.on('error', ()=>{
      return reject(new Error("Encountered error while reading file contents..!"));
    })
  });
};

// Define a function to Convert the file content to upper case and return the result in the resolved Promise
const convertToUpperCase = (fileContents) => {
  return new Promise((resolve, reject) => {
    if (!fileContents || fileContents.length === 0) {
      reject(new Error("Encountered error while reading file contents..!"));
    } else {
      resolve(fileContents.map((el) => el.toUpperCase()));
    }
  });
};

// Define a function to read and convert the file contents, use the then and catch blocks here
const readAndConvertFileContents = (fileName, cb) => {
  read(fileName)
    .then((content) => convertToUpperCase(content))
    .then((result) => cb(null, result))
    .catch((error) => cb(error.message));
};

module.exports = {
  readAndConvertFileContents,
};
