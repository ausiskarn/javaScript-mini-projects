// Given an array consisting of only prime numbers, remove all duplicate numbers from it. 

const arr = [3, 5, 7, 2, 2, 5, 7, 7]
const n = arr.length
// const newarr = [...new Set(arr)]

const b = []

for(let i=0;i<n;i++){
   if(b.indexOf(arr[i])=== -1){
    b.push(arr[i])
   }
}


console.log(b)