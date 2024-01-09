let categoryMap = new Map([
  ["PL", 'Personal Loan'],
  ["VL", 'Vehicle Loan'],
  ["EL", 'Education Loan'],
  ["HL", 'Home Loan']
]);
var category = function category(key) {  
  return categoryMap.get(key.toUpperCase());
};
  
  module.exports = {
    category: category
  };