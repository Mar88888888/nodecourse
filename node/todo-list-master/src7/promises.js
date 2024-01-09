const todolist = require('./todolist')

//Define a function that gets all the todos from the 
// todolist array declared asynchronously after 2 seconds
getAllTodos = () => {
    return new Promise((resolve, reject) => {
        try { 
                resolve(todolist);
        } catch (error) {
            reject(error);
        }
    });
    
}
// Define a function to add a todo to the todolist array
createTodo = async (todo) => {
    return new Promise((resolve, reject) => {
        try {           
            const newTodo = todo;
            if(todo == undefined){
                throw new Error('No todo data!');
            }
            todolist.push(newTodo);

            resolve(todolist);
        } catch (error) {
            reject(error);
        }
    });
}
module.exports ={
    createTodo,
    getAllTodos
}