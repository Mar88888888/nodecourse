const swapDigits = (number)=>{
    if(number <= 0){
        return 0;
    }
    let swappedNumber = 0;
    let numArr = (number + '').split('');
    if(numArr.length % 2 == 0){
        swapArrDigits(numArr);
    }else{
        let firstDigit = numArr[0];
        numArr = numArr.slice(1);
        swapArrDigits(numArr);
        numArr.unshift(firstDigit);
    }
    swappedNumber = Number(numArr.join(''));
    return swappedNumber;
    
}
function swapArrDigits(numArr) {
    for(let i = 0; i < numArr.length / 2; i++){
        [numArr[i*2], numArr[i*2 + 1]] = [numArr[i*2 + 1], numArr[i*2]];
    }
}

module.exports = swapDigits
