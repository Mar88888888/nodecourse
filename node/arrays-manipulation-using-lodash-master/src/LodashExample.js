
//import the lodash module
const lodash = require('lodash');

//Create a function to find a maximum value from number array.
function findMaxValue(numbers){
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return undefined; // Return undefined for an empty or non-array input
  }

  return lodash.max(numbers);
}
//Create a function to return all values from numbers array 
//which are greater than the second parameter.​
function filterValues(numbers, threshold) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
      return [];
  }

  return lodash.filter(numbers, (value) => value > threshold);
}

//Create a function to return all values of employeeName array in capital letters.
function nameInCapital(employeeNames) {
  if (!Array.isArray(employeeNames) || employeeNames.length === 0) {
      return [];
  }

  return lodash.map(employeeNames, (name) => lodash.toUpper(name));
}



module.exports = {
  findMaxValue,
  filterValues,
  nameInCapital,
}
