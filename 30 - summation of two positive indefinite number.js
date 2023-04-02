// Coding challenge #30-a: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.

var first = "1111";
var second = "9888";

var ans = "";


// keep first string largest
if (second.length > first.length) {
    var temp1 = first;
    first = second;
    second = temp1;
}

var len1 = first.length; // large string 
var len2 = second.length; // short string

// keeping the reversed "second" string in "temp" vairable
// Adding 0 to temp to equal both length
var temp = "";

for (let i = len2 - 1; i >= 0; i--) {
    temp += second[i];
}

let diff = len1 - len2;
len2 += diff;
while (diff--) {
    temp += '0';
}

// reversing the "temp" string, and make a copy of "second" string with leading zeros

let second2 = "";
for (let i = len2 - 1; i >= 0; i--) {
    second2 += temp[i];
}

// console.log(second2);
// now simply add two string by a loop
let carry = 0;
let seat;

for (let i = len1 - 1; i >= 0; i--) {
    let dsum = parseInt(first[i]) + parseInt(second2[i]) + carry;
    // console.log(dsum);
    if (dsum > 9) {
        let dualDigit = dsum.toString();
        carry = parseInt(dualDigit[0]);
        seat = dualDigit[1];
        ans += seat;
        // console.log("ans = " + ans + " carry = " + carry);
    }
    else {
        ans += dsum;
        // console.log("=> ans = " + ans + " carry = " + carry);
        carry = 0;
    }
    seat = 0;
}
if (carry) {
    ans += carry;
}

res = "";
for (let i = ans.length - 1; i >= 0; i--) {
    res += ans[i];
}

console.log(res);
