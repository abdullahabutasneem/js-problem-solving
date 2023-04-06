// Coding challenge #48. Create a function to return the longest word(s) in a string

var text = "Create a function to return the longest word(s) in a sentence.";

function isSeparator(c) {
    var separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?", "(", ")"];
    return separators.includes(c);
}

var max = -Infinity;

const getLongestWord = (text) => {
    var dict = [];
    var start = true;
    var wordEnd = false;
    var indStart, indEnd;
    for (var i = 0; i < text.length; i++) {
        var el = text[i];
        if (start && !isSeparator(el)) {
            start = false;
            indStart = i;
        }
        if (!start && isSeparator(el)) {
            start = true;
            indEnd = i - 1;
            wordEnd = true;
        }
        if (i == text.length - 1 && !start && !isSeparator(el)) {
            wordEnd = true;
            indEnd = i;
        }
        if (wordEnd) {
            var str = text.substr(indStart, indEnd - indStart + 1);
            if (str.length > max) {
                max = str.length;
            }
            dict.push(str);
            wordEnd = false;
        }
    }

    var largest = [];
    for (var el of dict) {
        if (el.length == max) {
            largest.push(el);
        }
    }
    return largest;
}


console.log(getLongestWord(text));
