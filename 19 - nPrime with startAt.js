// Coding challenge #19: Create a function that will return in an array the first "nPrimes" prime numbers greater than a particular number "startAt"

var nPrimes = 10;
var startAt = 100;
let primeArr = [];

let num = startAt;
if (num == 2) primeArr.push(2);
if (num % 2 == 0) num++;
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
console.log(primeArr);