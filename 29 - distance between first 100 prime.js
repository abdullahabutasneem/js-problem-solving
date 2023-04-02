// Coding challenge #29: Print the distance between the first 100 prime numbers

var nPrimes = 10;
let primeArr = [];
primeArr.push(2);
let num = 3;
while (primeArr.length < nPrimes) {
    let isDivisible = 0;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            isDivisible = 1;
            break;
        }
    }
    if (!isDivisible) {
        primeArr.push(num);
    }
    num += 2;
}

for (let i = 1; i < primeArr.length; i++) {
    console.log("Distance between " + primeArr[i - 1] + " and " + primeArr[i] + " = " + (primeArr[i] - primeArr[i - 1]));
}
