const num1 = parseFloat(prompt("Enter 1st number"));
const num2 = parseFloat(prompt("enter 2nd number"));
const opr = prompt("Enter a number");

switch(opr){
    case "+":
        var res = num1 + num2;
        console.log(`${num1} + ${num2} = ${res}`)
        break;
    case "-":
        var res = num1 - num2;
        console.log(`${num1} - ${num2} = ${res}`)
        break;
    case "*":
        var res = num1 * num2;
        console.log(`${num1} * ${num2} = ${res}`)
        break;
    case "/":
        var res = num1 / num2;
        console.log(`${num1} / ${num2} = ${res}`)
        break;
    default:
        console.log("Invalid input")
}