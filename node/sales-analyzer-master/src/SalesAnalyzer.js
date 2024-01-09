
//import all the require module
const fs = require('fs');
const readline = require('readline');
const Lodash = require('lodash');
const writeStream = fs.createWriteStream('output.txt');

//Write try and catch and handle the exceptions where ever require
//return the callback with appropriate values in the methods 

//More userdefined methods can be written if required to write the logical stuff

////This method will read the file content the first parameter is filename and 
//second is a callback
//create array name it as  fileContents
const readFileContents = (fileName, cb) => {
  let err = null;
  let resultData = [];
  let properties = [];
  const file = readline.createInterface({
    input: fs.createReadStream(fileName)
  });
  file.on('line', (line) =>{
    const arr = line.split(',');
    if(properties.length === 0){
      properties = [...arr];
    }else{
      let dataEl = {};
      for(let i = 0; i < properties.length; i++){
        dataEl[properties[i]] = arr[i];
      }
      resultData.push(dataEl);
    }
  });
  file.on('close', () => {
    cb(err, resultData);
  });
}

// Use Lodash to filter the data this method will take first parameter
//as fileContents and second parameter as a callback
const filterData = (fileContents, cb) => {
  let filteredData = Lodash.filter(fileContents, ['payment_method', 'credit']);
  cb(null, filteredData);
}

//This method will writeFile data to output.txt file
//it is taking parameters are filteredData and a callback
//filteredata will be given by the filterData method
const writeFilteredDataToFile = (filteredData, cb) => {
  try {
    writeStream.write(filteredData.toString()+'\n');
    cb(null, "Successfully wrote filtered data to output.txt file..!");
  } catch (err) {
    cb(err, null);
  }
    
}


module.exports = {
  readFileContents,
  filterData,
  writeFilteredDataToFile
}
