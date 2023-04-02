// Coding challenge #31a. Create a function that will return the number of words in a text

// Method 1

let text = "Abdullah Abu Tasneem";
var separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];
let word = 0;

function countWord(text) {
    for (let i = 0; i < text.length; i++) {
        let ch = text[i];
        if (i == 0 && separators.includes(ch)) {
            continue;
        }
        if (separators.includes(ch) && !separators.includes(text[i - 1])) {
            word++;
        }
    }
    if (!separators.includes(text[text.length - 1])) {
        word++;
    }
    return word;
}

console.log(countWord(text));