// Coding challenge #44. Create a function that will convert a string containing a binary number into a number

const binaryToNumber = (binary) => {
    return parseInt(binary, 2);
}

console.log(binaryToNumber("111"));