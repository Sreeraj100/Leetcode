/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    let stack=[]
    for(let i of s){
        if(i=="B" && stack[stack.length-1]=="A" ||i=="D" && stack[stack.length-1]=="C"){
            stack.pop()
        }else{
            stack.push(i)
        }
    }
    return stack.length
};