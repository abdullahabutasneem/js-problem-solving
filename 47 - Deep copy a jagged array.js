// Coding challenge #47. Deep copy a jagged array with numbers or other arrays in a new array

var ar1 = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];

const copyArray = (ar) => {
    var ar2 = [];
    for (var el of ar) {
        if (Array.isArray(el)) {
            el = copyArray(el);
        }
        console.log(el);
        ar2.push(el);
    }
    return ar2;
}

var ar2 = copyArray(ar1);
console.log(ar2);