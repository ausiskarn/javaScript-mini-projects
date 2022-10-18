const stringx = prompt("Enter a number");
const len = stringx.length;
let msg = "it is a palindrome"

for(i=0;i<len/2;i++){
    if(stringx[i] != stringx(len-1-i)){
        msg = "it is not palindrome."
    }
}
// console.log(msg)
document.write(msg)
    





