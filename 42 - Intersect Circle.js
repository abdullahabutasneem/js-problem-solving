// Coding challenge #42. Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting

const circleIntersect = (circle1X, circle1Y, circle1R, circle2X, circle2Y, circle2R) => {
    return getDistance(circle1X, circle1Y, circle2X, circle2Y) <= circle1R + circle2R;
}

const getDistance = (x1, y1, x2, y2) => {
    var l1 = x2 - x1;
    var l2 = y2 - y1;

    return Math.sqrt(l1 * l1 + l2 * l2);
}

console.log(circleIntersect(200, 200, 100, 300, 300, 50));