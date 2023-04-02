// Coding challenge #13: Find the maximum number in an array of numbers

var mx = 0;
function findMax(ar) {
    var ar2 = [];

    for (var i = 0; i < ar.length; i++) {
        if (ar[i] >= mx) {
            mx = ar[i];
        }
    }
    return mx;
}

var ar = [2, 6, 3, 90, 78, 56, 45, -9];
var x = findMax(ar);

console.log(x);