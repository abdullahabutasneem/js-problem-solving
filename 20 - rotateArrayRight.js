// Coding challenge #20: Rotate an array to the left 1 position


// Method 1

let arr = [2, 5, 7, 8, 9];

for (let i = 0; i < arr.length - 1; i++) {
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
}

console.log(arr);


// Method 2
let ar = [2, 5, 7, 8, 9];

function rotateLeft(ar) {
    var first = ar.shift();
    // console.log(ar);
    ar.push(first);
}

rotateLeft(ar);
console.log(ar);