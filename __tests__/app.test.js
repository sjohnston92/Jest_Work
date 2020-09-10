import {
  // methods,
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
})


//evensOnlyArray(numberArray) have this array return only numbers
describe("evensOnlyArray Test",()=>{
  test("evensOnlyArray should return only the even numbers from the array",()=>{
    expect(evensOnlyArray([1,2,3,4])).toEqual([2,4]);
  })
})