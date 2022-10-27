// Given an array of size N and you have to tell whether the array is perfect or not. An array is said to be perfect if it's reverse array matches the original array. If the array is perfect then print "PERFECT" else print "NOT PERFECT".

const arr = ["M","A","D","A","M"]
const n = arr.length
if(n>0){
    function palindrome(arr,n) {
        for(let i=0;i<n/2;i++) {
            if(arr[i] != arr[n-1-i]){
                return "NOT PERFECT"
            }
            else {
                return "PERFECT"
            }
        }
    }
    console.log(palindrome(arr,n))
}else {
    console.log("array cannot be null")
}