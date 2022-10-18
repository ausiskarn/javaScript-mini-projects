const string = prompt("enter a string")
const reg = /[aeiou]/gi;
const chars = string.match(reg);
console.log(chars.join(','));
console.log(chars.length)