// Coding challenge #12: Create a function that receives an array of numbers and returns an array containing only the positive numbers

// Method 1
function getPositives(ar) {
    var ar2 = [];

    for (var i = 0; i < ar.length; i++) {
        if (ar[i] >= 0) {
            ar2.push(ar[i]);
        }
    }
    return ar2;
}

var ar = [2, 6, 3, 90, 78, 56, 45, -9];
var x = getPositives(ar);

console.log(x);


// Method 2
function getPositives(ar) {
    var ar2 = [];

    for (var el of ar) {
        if (el >= 0) {
            ar2.push(el);
        }
    }
    return ar2;
}

var ar = [2, 6, 3, 90, 78, 56, 45, -9];
var x = getPositives(ar);

console.log(x);


// Method 3
function getPositives(ar) {
    return ar.filter(el => el >= 0);
}

var ar = [2, 6, 3, 90, 78, 56, 45, -9];
var x = getPositives(ar);

console.log(x);
