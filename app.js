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
