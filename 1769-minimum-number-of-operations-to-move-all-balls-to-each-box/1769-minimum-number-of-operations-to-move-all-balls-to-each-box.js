/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    let arr=[]
    let ind=[]
    for(let i=0;i<boxes.length;i++){
       if(boxes[i]==1){
        ind.push(i)
       }
    }
    for(let j=0;j<boxes.length;j++){
         let sum=0
         for(let i of ind){
            sum+= Math.abs(j-i)
         }
         arr.push(sum)
        }
        return arr
};