// Given an array Arr of N positive integers. Your task is to find the elements whose value is equal to that of its index value ( Consider 1-based indexing ).

const arr = [-10, -5, 0, 3, 7]
const n= arr.length

function check(arr,n){
    for(let i=0;i<n;i++){
        if(arr[i]===i){
            console.log(i)
        } 
    }
}
check(arr,n)