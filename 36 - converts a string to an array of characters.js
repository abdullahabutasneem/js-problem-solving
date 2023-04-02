// Coding challenge #36. Create a function that converts a string to an array of characters

//Method 1
console.log(getChars("I like JavaScript"));

function getChars(s) {
    return Array.from(s);
}

// Method 2
console.log(getChars("I like JavaScript"));

function getChars(s) {
    let ans = [];
    for (let el of s) {
        ans.push(el);
    }
    return ans;
}