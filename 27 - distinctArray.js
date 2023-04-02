// Coding challenge #27: Create a function that will receive an array of numbers as argument and will return a new array with distinct elements

let arr = [1, 2, 3, 4, 4, 6, 6, 8, 1, 10];
// Method 1

function distinctArray(arr) {
    var ans = [];

    for (let i = 0; i < arr.length; i++) {
        if (!isExist(arr[i], ans)) {
            ans.push(arr[i]);
        }
    }

    return ans;
}

function isExist(n, ar) {
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] === n)
            return true;
    }

    return false;
}

console.log(distinctArray(arr));

// Solution 2
var ar = distinctArray2(arr);
console.log(ar);

function distinctArray2(ar) {
    var ar2 = [];

    var lastIndex = ar.length - 1;

    for (let i = 0; i <= lastIndex; i++) {
        if (!isInArray(ar[i], ar, i + 1, lastIndex)) {
            ar2.push(ar[i]);
        }
    }

    return ar2;
}

function isInArray(n, ar, fromIndex, toIndex) {
    for (var i = fromIndex; i <= toIndex; i++) {
        if (ar[i] === n)
            return true;
    }

    return false;
}