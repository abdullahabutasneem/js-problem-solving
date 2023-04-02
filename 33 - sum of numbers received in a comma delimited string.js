// Coding challenge #33. Calculate the sum of numbers received in a comma delimited string

let str = "1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9";

function sumCSV(str) {
    let ar = str.split(",");
    let sum = 0;
    for (let el of ar) {
        console.log(el);
        sum += parseFloat(el);
    }
    return sum;
}

console.log(sumCSV(str));