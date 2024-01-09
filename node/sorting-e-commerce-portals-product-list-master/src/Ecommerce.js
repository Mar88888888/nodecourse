
//import all the require modules
const fs = require('fs');
const readline = require('readline');
const lodash = require('lodash');
const writeStream = fs.createWriteStream('output.txt');
//write try catch to hanlde the exceptions

//More userdefined methods can be written if required to write the logical stuff

//return the callback with appropriate data where ever require in all the methods

//This method will read the file it takes two parameters first the fileName 
//and second the callback
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
          if(properties[i] === 'product_rating'){
            if(arr[i] === 'No rating available'){
              arr[i] = '0';
            }
          }else if(properties[i] === 'retail_price'){
            arr[i] = Number(arr[i]);
          }
          dataEl[properties[i]] = arr[i];
        }
        resultData.push(dataEl);
      }
    });
    file.on('close', () => {
      cb(err, resultData);
    });
    file.on('error', (error) => {
      cb("Encountered error while reading file contents..!");
    });
}

//This method will sortDataonprice it will take two parameters one is fileContent
//second the callback
const sortDataOnPrice = (fileContents, cb) => {
  //use lodash.sortBy()
  fileContents.forEach(el =>{
    el.retail_price = Number(el.retail_price);
  })
  let sortedData = lodash.sortBy(fileContents, ['retail_price']);
  sortedData.forEach(el =>{
    el.retail_price = el.retail_price + '';
  })
  cb(null,  sortedData);
}

//This method will sortDataonRating 
const sortDataOnRating = (fileContents, cb) => {
//use map where ever required 
  
//use lodash sortBy() and compact() if required
  fileContents = fileContents.filter(el=> el.product_rating !== 'No rating available');
  let sortedData = lodash.sortBy(fileContents, ['product_rating']);
  //use lodash.reverse() if required
  cb(null, lodash.reverse(sortedData));
}

//This method will write the sortedData in the output file
const writeSortedDataToFile = (outputFileName, sortedData, cb) => {
 
}





module.exports = {
    readFileContents,
    sortDataOnPrice,
    sortDataOnRating,
  
}