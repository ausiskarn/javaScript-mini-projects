// Given an array of N distinct elements, the task is to find all elements in array except two greatest elements in sorted order. 

const arr = [2, 8, 7, 1, 5];
const n= arr.length

function findElements(arr,n){
    for(let i=0;i<n;i++){
        let count =0;
        for(let j=0;j<n;j++)
            if(arr[i]>arr[j])
            count++
        if (count >= 2)
            console.log(arr[i]+" ");
        
    }
}

findElements(arr,n)