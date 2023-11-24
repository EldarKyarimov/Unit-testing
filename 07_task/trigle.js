function triangle(a, b, c) {
    let halfP = (a + b + c) / 2;
    let trig = (halfP - a) * (halfP - b) * (halfP - c);
    return Math.floor(Math.sqrt(trig));
}

module.exports = { triangle }