function analyzeArray(arrayOfNumbers) {
  
    if(arrayOfNumbers.length === 0 ) {
        throw new TypeError("Please enter numbers only");
    }
    for (let element of arrayOfNumbers) {
        if (typeof element !== "number") {
            throw new TypeError("Please enter numbers only");
        }
    }

    let sum = 0;
    
    arrayOfNumbers.forEach(element => {
        sum = sum + element;
    });
    const sortedArray = arrayOfNumbers.sort((num1,num2)=>num1-num2)

    const average = Number(((sum / arrayOfNumbers.length).toFixed(2)));
    const min = Number(sortedArray[0]);
    const max = Number(sortedArray[sortedArray.length-1])
    const length = sortedArray.length;
    
  
    return {average : average,
        min: min,
        max : max,
        length : length,
    }
}

export  {analyzeArray}
// console.log(analyzeArray([2,10,5]))