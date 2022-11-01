/* 9. Write a JavaScript function which accepts an argument and returns the type. 
Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
*/

const typeFinder = a => {
    let datatype = [Function,RegExp,Number,String,Boolean,Object],x;
    let len = datatype.length
    if(typeof(a) === "object" || typeof(a) === "function"){
        for(x=0;x<len;x++){
            if( a instanceof datatype[x]){
                // The instanceof operator tests the presence of constructor.prototype in object's prototype chain. 
                return datatype[x]
            }
        }
    }
    return typeof a
}
