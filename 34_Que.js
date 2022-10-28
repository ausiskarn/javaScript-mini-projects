// Given an array Arr of size N, swap the Kth element from beginning with Kth element from end.

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const n = arr.length
const p = 3
const k = p-1

function swapElement(arr,n,k){
    const temp = arr[k]
    arr[k] = arr[n-1-k];
    arr[n-1-k] = temp;
    return arr
    
}
console.log(swapElement(arr,n,k))