// Coding challenge #25: Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
let arr2 = [1, 3, 5, 7, 9, 11, 13];
let newArr = [];
let res = merge(arr1, arr2);

function merge(arr1, arr2) {
    for (let el of arr1) {
        if (!arr2.includes(el)) {
            newArr.push(el);
        }
    }
    for (let el of arr2) {
        if (!arr1.includes(el)) {
            newArr.push(el);
        }
    }
    return newArr;
}

console.log(res);