/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    let res=[]
    
    for(let i=1;i<=A.length;i++){
       let count=0
       let l=A.slice(0,i)
       let r=B.slice(0,i)
       for(let i of l){
        if(r.includes(i)){
            count++
        }
       }
       res.push(count)
    }
    return res
};