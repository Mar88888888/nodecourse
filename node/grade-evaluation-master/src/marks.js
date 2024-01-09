// Define a function to calculate the total marks and return a promise 
const calculateTotalMarks = (math,english,science,social,language) =>{
    return new Promise((resolve,reject)=>{
        if(math == undefined || english == undefined || science == undefined || social == undefined || language == undefined){
            return reject('Null values for marks');
        }
        resolve(math + english + science + social + language);
        }) 
}
// Define a function to calculate average marks and return a promise
const calculateAverageMarks = (totalMarks) =>{
    return new Promise((resolve,reject)=>{
        if(totalMarks == undefined || totalMarks < 0 || totalMarks > 500){
            return reject('Null values for marks');
        }
        resolve(totalMarks/5);
    }) 
}
// Define a function to calculate grade and return a promise
const calculateGrade = (averageMarks)=>{
    return new Promise((resolve,reject)=>{
       if(averageMarks == undefined || averageMarks < 0 || averageMarks > 100){
        return reject('Null values for marks');
       }
       let grade;
        if(averageMarks >= 90){
                grade = 'A+'
        }else if(averageMarks >= 80 && averageMarks < 90){
                grade = 'A'
        }else if(averageMarks >= 70 && averageMarks < 80){
            grade = 'B'
        }else if(averageMarks >= 60 && averageMarks < 70){
            grade = 'C'
        }else if(averageMarks >= 50 && averageMarks < 60){
            grade = 'E'
        }else {
            grade = 'F'
        }
        resolve(grade);
    })   
}

module.exports = {
    calculateAverageMarks,calculateGrade,calculateTotalMarks
}
