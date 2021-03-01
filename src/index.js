module.exports = function reverse (n) {
    let str = Math.abs(n) + '', num = str.split('').reverse().join('');
    return +num;
}
