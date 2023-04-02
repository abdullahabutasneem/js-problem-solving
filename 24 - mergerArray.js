// Coding challenge #24: Create a function that will merge two arrays and return the result as a new array
let newArr = [];

function mergeArray(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        newArr.push(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
        newArr.push(arr2[i]);
    }
    return arr1;
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

mergeArray(arr1, arr2);
console.log(newArr);