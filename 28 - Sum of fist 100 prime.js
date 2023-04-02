// Coding challenge #28: Calculate the sum of first 100 prime numbers

let count = 100;
count--;
let sum = 2;
let num = 3;
while (count--) {
    let isDivisible = 0;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            isDivisible = 1;
            break;
        }
    }
    if (!isDivisible) {
        sum += num;
    }
    else count++;
    num += 2;
}

console.log(sum);