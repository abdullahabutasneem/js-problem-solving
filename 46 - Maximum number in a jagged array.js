// Coding challenge #46-a. Find the maximum number in a jagged array of numbers or array of numbers

var ar = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];

// Method 1
const findMax = (ar) => {
    var max = -Infinity;

    for (var i = 0; i < ar.length; i++) {
        var el = ar[i];
        if (Array.isArray(el)) {
            el = findMax(el);
        }

        if (el > max) {
            max = el;
        }
    }
    return max;
}

var max = findMax(ar);
console.log(max);

// Method 2
const findMax2 = (ar) => {
    var max1 = -Infinity;
    var arr = [];
    arr.push(ar);
    while (arr.length > 0) {
        array = arr.pop();
        for (var i = 0; i < array.length; i++) {
            var el = array[i];
            if (Array.isArray(el)) continue;
            if (el > max1) {
                max1 = el;
            }
        }
    }
    return max1;
}

var max1 = findMax(ar);
console.log(max1);