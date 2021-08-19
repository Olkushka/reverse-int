module.exports = function reverse (n) {
    let num = Math.abs(n);
    return Number(`${num}`.split('').reverse().join(''));
};
