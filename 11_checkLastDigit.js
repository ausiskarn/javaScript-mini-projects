const a= prompt("Enter first number: ")
const b= prompt("Enter Second number: ")
const c= prompt("Enter Third number: ")

const rel1 = a%10;
const rel2 = b%10;
const rel3 = c%10;

if(rel1===rel2 && rel1===rel3){
    document.write(a+","+b+" and "+c + " have same last digit")
}else {
    document.write(a+","+b+" and "+c + " Not have same last digit")

}