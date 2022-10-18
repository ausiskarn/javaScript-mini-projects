const stringx = "Mr. Red has a red car and a Red bike."
const reg = new RegExp("red","gi");
const newstringx = stringx.replace(reg,"blue")
console.log(newstringx)