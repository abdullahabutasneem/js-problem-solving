// Coding challenge #41. Create a function to calculate the distance between two points defined by their x, y coordinates

const getDistance = (x1, y1, x2, y2) => {
    var l1 = x2 - x1;
    var l2 = y2 - y1;

    return Math.sqrt(l1 * l1 + l2 * l2);
}

console.log(getDistance(100, 100, 400, 300));