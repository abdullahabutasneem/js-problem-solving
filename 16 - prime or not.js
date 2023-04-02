// Coding challenge #16: Create a function that will return a Boolean specifying if a number is prime

function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

console.log("2 is prime?  " + isPrime(2));
console.log("5 is prime?  " + isPrime(5));
console.log("10 is prime?  " + isPrime(10));

