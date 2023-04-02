// Coding challenge #21: Rotate an array to the right 1 position

// Method 1
let arr = [2, 5, 7, 8, 9];

for (let i = arr.length - 1; i > 0; i--) {
    let temp = arr[i];
    arr[i] = arr[i - 1];
    arr[i - 1] = temp;
}

console.log(arr);

// Method 2

let ar = [2, 5, 7, 8, 9];


function rotateRight(ar) {
    var last = ar.pop();
    ar.unshift(last);
}

rotateRight(ar);
console.log(ar);