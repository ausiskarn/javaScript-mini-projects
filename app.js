let possibleCombination = str => {
    // let combinations = [];
    for(let i=0;i< str.length;i++){
        for(let j=i+1;j<str.length +1; j++){
            console.log(str.slice(i,j))
        }
        console.log("----")
    }
    console.log("+++++")
    // return combinations;
}
console.log(possibleCombination("hello"));