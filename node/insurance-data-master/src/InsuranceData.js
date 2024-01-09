//import all the modules require
const fs = require('fs');
const readline = require('readline');
const Lodash = require('lodash');
const writeStream = fs.createWriteStream('output.txt');

//Use try and catch to handle the error where ever required
//return the callback with appropriate data where ever require in all the methods

//More userdefined methods can be written if required to write the logical stuff

//This method will take two parameters first the fileName
//and second a callback 
//read file data line by line using readLine
//create array and push all data inside the array


const readFileContentsLineByLine = (fileName, cb) => {
  let err = null;
  let resultData = [];
  let properties = [];

  const rl = readline.createInterface({
    input: fs.createReadStream(fileName),
    output: process.stdout,
    terminal: false
  });
  
  rl.on('line', (line) =>{
    const arr = line.split(',');
    if(properties.length === 0){
      properties = [...arr];
    }

    let dataEl = {};
    for(let i = 0; i < properties.length; i++){
      dataEl[properties[i]] = arr[i];
    }
    resultData.push(dataEl);    
  
  });
  rl.on('close', () => {
    cb(err, resultData);
  });


}

//This method will take two parameters first the filecontent
//and second the callback 
//use map to filter the data 
//Filter all the records for female candidates given region as southwest.

const filterFemaleCandidates = (fileContents, cb) => {
  let filteredData = fileContents.map(element => element.split(', ')).filter(element => element[1] === 'female' && element[5] === 'southwest').map(el => el.join(', '));
  cb(null, filteredData);
  
}

//This method will write filtered data in the output file
const writeFilteredDataToFile = (outputFileName, filteredData, cb) => {
 
    //use writeFile method to write the filteredData
  
}


//This method will read the file content using Streams
//create array and push all the data from file to it


const readFileContentsUsingStream = (fileName, cb) => {
  let fileContents = [];
  let properties = [];
  const rl = readline.createInterface({
    input: fs.createReadStream(fileName),
    crlfDelay: Infinity,
  });

  rl.on('line', (line) => {
    if(properties.length === 0){
      properties.push(line);
    }else{
      fileContents.push(line);
    }
  });

  rl.on('close', () => {
    // All lines have been read
    cb(null, fileContents);
  });

  rl.on('error', (err) => {
    console.log('Error while reading contents of file using streams, ERROR:', err);
    cb('Encountered error while reading file contents using streams..!');
  });
   
}

//This method will filetDatewithNoChildren it will take two parameters
//first the fileContent and second the callback
//use map if required to filter the data

const filterDataWithNoChildren = (fileContents, cb) => {
  let filteredData ;
//use lodash.compact() if required 

  
}




module.exports = {
  readFileContentsLineByLine,
  filterFemaleCandidates,
  readFileContentsUsingStream,
 }
