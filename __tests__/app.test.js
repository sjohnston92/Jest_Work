import {
  // methods,
  findItem,
  evensOnlyAndDoubleArray,
  someNumbersAreOdd,
  allNumbersGreaterThanZero,
  arraySum,
  evensOnlyArray,
  doubleArray,
  originalArray
} from '../app'

// hint of look in before_each before_all
describe('originalArray Test', ()=> {
  test('originalArray should return it self', ()=>{
    expect(originalArray([1,2,3,4])).toEqual([1,2,3,4])
  })
})

//doubleArray function
describe("doubleArray Test",()=> {
  test('doubleArray should return double the value for each instance',()=>{
    expect(doubleArray([1,2,3,4])).toEqual([2,4,6,8]);
  })
});


//evensOnlyArray(numberArray) have this array return only numbers
describe("evensOnlyArray Test",()=>{
  test("evensOnlyArray should return only the even numbers from the array",()=>{
    expect(evensOnlyArray([1,2,3,4])).toEqual([2,4]);
  })
});

// sumArray
describe("arraySum Test",()=>{
  test("arraySum should return array with sum of numbers",()=>{
    expect(arraySum([1,2,3,4])).toEqual(10);
  })
});

//allNumbersGreaterThanZero(numberArray) 

describe("allNumbersGreaterThanZero Test",()=>{
  test("allNumbersGreaterThanZero return true if every item greater than 0",()=>{
  expect(allNumbersGreaterThanZero([1,2,3,4])).toEqual(true);
  })
});

//someNumbersAreOdd
describe("someNumbersAreOdd Test",()=>{
  test("someNumbersAreOdd return true if one or more items in array are odd",()=>{
  expect(someNumbersAreOdd([1,2,3,4])).toEqual(true);
  })
});


//evens only and double that

describe("evensOnlyAndDoubleArray Test",()=>{
  test("evensOnlyAndDoubleArray return array double and even",()=>{
  expect(evensOnlyAndDoubleArray([1,2,3,4])).toEqual([4,8]);
  })
});

//findItem(numberArray, 1)
describe("findItem Test",()=>{
  test("findItem find an item method return 'not found' if not found",()=>{
  expect(findItem([1,2,3,4])).toEqual(1);
  })
});