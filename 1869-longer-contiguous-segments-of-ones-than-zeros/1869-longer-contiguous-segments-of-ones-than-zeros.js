/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function(s) {
    
let one=0
let zero=0
let oneArr=[]
let zeroArr=[]
for(let i=0;i<s.length+1;i++){
        if(s[i]==1){
            one++
        }else{
         oneArr.push(one)   
          one=0
        }
}
for(let i=0;i<s.length+1;i++){
        if(s[i]==0){
            zero++
        }else{
         zeroArr.push(zero)   
          zero=0
        }
}



let oneCount=Math.max(...oneArr)
let zeroCount=Math.max(...zeroArr)


return oneCount>zeroCount


};