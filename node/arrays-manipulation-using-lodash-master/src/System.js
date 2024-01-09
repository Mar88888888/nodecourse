
//import OS module
const os = require('os');

//Create a function to get the name of the operating system of host machine.​
function getOSName() {
  return os.type();
}
//Create a function to get returns the number of free memory of the system in bytes.​
function getFreeMemory(){

}
//Create a function to get the information about current user of the system.​
function getCurrentUser(){

}
//Create a function to get the information of the hostname.
function getHostName(){

}
//Create a function to get the information about the CPU.
function getCPUDetails(){
  
}


module.exports = {
  getOSName,
  getFreeMemory,
  getCurrentUser,
  getHostName,
  getCPUDetails
}