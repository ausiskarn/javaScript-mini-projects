const stringx = prompt("Enter a String")
const charx = prompt("Enter a character");
const stringlen = stringx.length;
let counter = 0;
// document.write(stringlen)

for(i=0;i<stringlen;i++){
    if(stringx[i]==charx){
        counter++
    }
}
document.write(`${stringx} : ${charx} => ${counter}`)