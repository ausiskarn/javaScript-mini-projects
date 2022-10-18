const num = parseInt(prompt("Enter a number"));

function summ(num){
    if(num>0){
        return num + summ(num-1)
    }else{
        return num
    }
}

const ans = summ(num)
console.log(ans)