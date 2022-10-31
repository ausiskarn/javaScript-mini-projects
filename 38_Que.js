// Write a JavaScript function that generates all combinations of a string

let possibeleCombination = str => {
    let combinations = [];
    const a = str.length;

    for(let i=0;i<a;i++){
        for(let j=i+1;j<a+1;j++){
            combinations.push(str.slice(i,j))
        }
    }
    console.log(combinations)
}
possibeleCombination("helo")