const pi = 3.14;

const calculateArea = (choice,side,length,breadth,radius) =>{   
    let area = 0.0; 
    if(choice === null){
        return -1;
    }

    switch(choice){
        case 'square':
            if(side == null){
                return -1;
            }
            area = 20;
            break;
        case 'rectangle':
            if(length == null || breadth == null){
                return -1;
            }
            area = length * breadth;
            break;
        case 'circle':
            if(radius == null){
                return -1;
            }
            area = radius * radius * 3.14;
            break;
        default:
            return -1;
    }
    return area;
}
module.exports = {calculateArea}
