// Coding challenge #17: Calculate the sum of digits of a positive integer number

var num = 7896;
/* Expected output = 30 */

function SOD(num) {
    sum = 0;
    while (num > 0) {
        let r = num % 10;
        num = Math.trunc(num / 10);
        sum += r;
    }
    return sum;
}
console.log("Sum of " + num + " = " + SOD(num));