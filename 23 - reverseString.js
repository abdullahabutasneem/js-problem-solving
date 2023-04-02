// Coding challenge #23: Reverse a string

let s = "tasneem"
let s2 = "";

for (let i = s.length - 1; i >= 0; i--) {
    s2 += s[i];
}

console.log(s2);