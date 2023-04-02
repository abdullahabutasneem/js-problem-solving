// Coding challenge #22: Reverse an array

let arr = [2, 5, 7, 8, 9, 12];
let n = arr.length;
let m = n;

for (let i = 0; i < n / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[m - 1];
    arr[m - 1] = temp;
    m--;
}

console.log(arr);