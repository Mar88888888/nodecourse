const todolist = require("./todolist");
const getAllTodos = (listTodo) => {
      return new Promise((resolve, reject) => {
            if (listTodo === undefined) {
                reject("No data to be added");    
            } else {
                resolve(todolist);    
            }  
        });
    };

// Define a function to add a todo to the todolist array
const createTodo = (todo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (todo === undefined) {
                reject("No data to be added");      
            }      
            resolve(todolist.push(todo));    
        }, 2000);  
    });
};
        
module.exports = {  createTodo,  getAllTodos,};  