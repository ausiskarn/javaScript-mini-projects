// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.

const checkAlpha = str => {
    let final = str.split("").sort().join("")
    console.log(final)
}
checkAlpha("webmaster")