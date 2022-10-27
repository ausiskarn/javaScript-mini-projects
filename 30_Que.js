// Given an integer array Arr[] of size N. The task is to find sum of it.
const arr = [83,54,343,5823,24]
const n = 5;
let total =0;

const sumOfAll = (arr,n)=> {
    for(let i=0;i<5;i++){
        total= total + arr[i]
    }
    
    console.log(total)
    
}
sumOfAll(arr,n)


