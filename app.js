export const originalArray = (arr) =>{
  return arr
}

// double array

export function doubleArray(numberArray){
  return numberArray.map((num)=>{
    return num *2;
  });
}

//even function

export function evensOnlyArray(numberArray){
    let evens = [];
    for (let i = 0; i < numberArray.length; i++){
      if (numberArray[i] % 2 ===0){
        evens.push(numberArray[i]);
      }
    }
    return evens;
  }
  

//  arraySum function
export function arraySum(numberArray){
    return numberArray.reduce((a, b) => a + b, 0)
}

// allNumbersGreaterThanZero

export function allNumbersGreaterThanZero(numberArray){
  let result = numberArray.every( e  => e > 0);
  return result;
}

// someNumbersAreOdd(numberArray)
export function someNumbersAreOdd(numberArray){
  const odd = (element) => element % 2 != 0;
  return numberArray.some(odd);  
};

//evensOnlyAndDoubleArray(numberArray)

export function evensOnlyAndDoubleArray(numberArray){
  let evens = [];
  for (let i = 0; i < numberArray.length; i++){
    if (numberArray[i] % 2 ===0){
      evens.push(numberArray[i]);
    }
  }
  return evens.map((num)=>{
    return num *2;
  })
}

// findItem*
export function findItem(numberArray){
  const found = numberArray.find(element => element === 1);
    if (found != 1){
    console.log("not found");
    }
    return found;
}

//sortArray

export function sortArray(numberArray){
  return numberArray.sort((a,b)=>b-a)
}