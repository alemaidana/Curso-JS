function rangeOfNumbers(startNum, endNum) {
    
    if(startNum === endNum ){

        return [endNum];
    }
    
    const array = rangeOfNumbers(startNum, endNum - 1);

    array.push(endNum);

    return array;
};


console.log(rangeOfNumbers(1,5));
console.log(rangeOfNumbers(6,9));