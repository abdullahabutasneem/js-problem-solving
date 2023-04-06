// Coding challenge #50. Create a function that will receive n as argument and return an array of n unique random numbers from 1 to n.

console.log(getRandomNumbers(10));

function getRandomNumbers(n) {
    var ar = [];

    for (var i = 1; i <= n; i++) {
        ar.push(i);
    }

    shuffleArray(ar);

    return ar;
}

function shuffleArray(ar) {
    for (var i = ar.length - 1; i > 0; i--) {
        var j = randomInt(0, i - 1);

        var t = ar[i];
        ar[i] = ar[j];
        ar[j] = t;
    }

    return ar;
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}