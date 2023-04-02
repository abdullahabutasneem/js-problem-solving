// Coding challenge #34. Create a function that will return an array with words inside a text

let text = "Create a function, that will return an array (of string), with the words inside the text";
var separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?", "(", ")"];

function stringArray(text) {
    let arr = [];
    let len = 0;
    let start = 0;
    for (let i = 0; i < text.length; i++) {
        let ch = text[i];
        if (i == 0 && !separators.includes(ch)) {
            start = i;
            len = 0;
        }
        else if (!separators.includes(ch) && separators.includes(text[i - 1])) {
            start = i;
            len = 0;
        }
        len++;
        if (separators.includes(ch) && !separators.includes(text[i - 1])) {
            let str = text.substr(start, len - 1);
            console.log(str);
            arr.push(str);
        }
    }
    let str = text.substr(start, len);
    arr.push(str);
    return arr;
}

console.log(stringArray(text));

