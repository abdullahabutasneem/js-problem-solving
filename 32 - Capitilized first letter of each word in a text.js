// Coding challenge #32. Create a function that will capitalize the first letter of each word in a text

let text = "abdullah abu Tasneem";
let ans = "";
var separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];

function capitalize(text) {
    for (let i = 0; i < text.length; i++) {
        let ch = text[i];
        if (i == 0 && !separators.includes(ch)) {
            if (ch >= 'a' && ch <= 'z') {
                ans += ch.toUpperCase();
            }
            else ans += ch;
        }
        else if (separators.includes(text[i - 1])) {
            if (ch >= 'a' && ch <= 'z') {
                ans += ch.toUpperCase();
            }
            else ans += ch;
        }
        else ans += ch;
    }
    return ans;
}

console.log(capitalize(text));