// Given an array having both positive and negative integers. The task is to compute the length of the largest subarray with sum 0.

let arr = [15, -2, 2, -8, 1, 7, 10, 23];
let N = arr.length;

function maxLen(arr,N){
    let max_len =0;
    for(let i=0;i<N;i++){
        let curr_sum =0;

        for(let j=i;j<N;j++){
            curr_sum += arr[j];
             if(curr_sum == 0){
                max_len = Math.max(max_len,j-i+1)
             }
        }
    }
    return max_len;
}

console.log(maxLen(arr, N))