// Write a JavaScript function that reverse a number.
function rev(n){
    n = n + "";
    return n.split("").reverse().join("")
}
console.log(rev(12458))
