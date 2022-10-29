const num = 5;
const patternfunction = n => {
    
    for(let i=1;i<=n;i++){
      for(let j=i;j<=n;j++){
          console.log("")
      }  
      for(let j=1;j<=i;j++){
        console.log("* ")
      }
        console.log("\n")
    }
}
patternfunction(num)