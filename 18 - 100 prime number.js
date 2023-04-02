// Coding challenge #18: Print the first 100 prime numbers

let count = 100;
console.log(2);
count--;

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
        console.log(num);
    }
    else count++;
    num += 2;
}
