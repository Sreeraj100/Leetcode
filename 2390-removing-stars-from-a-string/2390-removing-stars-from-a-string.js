/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
   let arr = []

for(let i of s){
    if(i==="*"){
       arr.pop()
    }else{
     arr.push(i)
    }
}

return arr.join('')

};