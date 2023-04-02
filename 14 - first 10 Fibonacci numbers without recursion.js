// Coding challenge #14: Print the first 10 Fibonacci numbers without recursion

var f0 = 0;
var f1 = 1;
console.log(f0);
console.log(f1);

for (var i = 2; i < 10; i++) {
    var fi = f0 + f1;
    console.log(fi);

    f0 = f1;
    f1 = fi;
}