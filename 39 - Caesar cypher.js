// Coding challenge #39. Implement the Caesar cypher

var text = "I LOVE JAVASCRIPT";
var textEnc = encrypt(text, 13);
var textDec = decrypt(textEnc, 13);

console.log(text);
console.log(textEnc);
console.log(textDec);

function decrypt(msg, key) {
    return encrypt(msg, key * -1);
}

function encrypt(msg, key) {
    var encMsg = "";

    for (var i = 0; i < msg.length; i++) {
        var code = msg.charCodeAt(i);

        if (code >= 65 && code <= 90) {
            code -= 65;
            code = mod(code + key, 26);
            code += 65;
        }
        encMsg += String.fromCharCode(code);
    }
    return encMsg;
}

function mod(n, p) {
    if (n < 0) {
        n = p - Math.abs(n) % p;
    }
    return n % p;
}