// Concatenate two arrays

let concatenated : (string | number)[]; 

const concatArr = (arr1 : typeof concatenated, arr2 : typeof  concatenated): typeof concatenated => {
  return [...arr1, ...arr2];
};

// Add numbers in an array

const addArr = (arr: number[]): number => {
  let total = 0;
  for (let x of arr){
    total += x;
  }
  return total;
};

// Find the largest number in an array
const lgNum = (arr: number[]): number => {
  let largest = 0;
  
  arr.forEach((x:number) => {
    if (x > largest) {
      largest = x;
    }
  });
  return largest;
};

// Remove the 3rd item from an array
const cut3 = (arr: number[]): number[] => {
  arr.splice(2, 1);
  return arr;
};

module.exports = {
  concatArr,
  addArr,
  lgNum,
  cut3,
};
