// Coding challenge #49. Shuffle an array of strings

var ar = ["Shuffle", "an", "array", "of", "strings"];

const shuffleArray = (ar) => {
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

console.log(shuffleArray(ar));