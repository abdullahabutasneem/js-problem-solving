// Coding challenge #4: Print all the multiplication tables with numbers from 1 to 10

for (var i = 1; i <= 10; i++) {
    printTable(i);
    console.log("");
}

function printTable(num) {
    for (var i = 1; i <= 10; i++) {
        var res = i * num;
        console.log(num + " x " + i + " = " + res);
    }
}