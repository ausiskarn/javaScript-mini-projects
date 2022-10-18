const stringx = prompt("Enter a string");
const charx = prompt("Enter desired letter");
let bool = true

if(stringx.startsWith(charx) && stringx.endsWith(charx)){
    bool=true
}
else{
    bool = false
}
console.log(bool)
// for(i=0; i<stringx.length; i++){
//     console.log(stringx[]);
//     // if(stringx[i]===charx && )
// }