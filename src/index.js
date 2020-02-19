module.exports = function reverse (n) {
    let abs = Math.abs(n)
    return +abs.toString().split("").reverse().join("");
}
