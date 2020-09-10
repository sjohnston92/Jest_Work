export const originalArray = (arr) =>{
  return arr
}

export function doubleArray(numberArray){
  return numberArray.map((num)=>{
    return num *2;
  });
}

export function evensOnlyArray(numberArray){
  let numberArray = evens;
  return numberArray.map((num)=>{
    if (num % 2 === 0){
      evens.push(num);
      return evens}
  })
}