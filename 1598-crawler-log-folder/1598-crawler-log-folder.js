/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let path_stack= []
    for(let log of logs){
        if(log=='../'){

            if(path_stack.length>0){

                path_stack.pop()
            }
        }
        else if(log != './'){
            path_stack.push(log)
        }
    }
    return path_stack.length
};