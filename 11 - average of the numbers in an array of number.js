// Coding challenge #11: Calculate the average of the numbers in an array of numbers

var ar = [2, 6, 3, 90, 78, 56, 45, 32];
var sum = 0;

for (var i = 0; i < ar.length; i++) {
    sum += ar[i];
}

var avg = sum / ar.length;
console.log(avg);