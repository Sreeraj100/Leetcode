/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function(nums) {
    
let oddInd=[]
let eveInd=[]
let res=[]
for(let i=0;i<nums.length;i++){
    if(i%2==0){
       eveInd.push(nums[i]) 
    }else{
       oddInd.push(nums[i])
    }
}
oddInd.sort((a,b)=>b-a)
eveInd.sort((a,b)=>a-b)

let len=Math.max(eveInd.length,oddInd.length)
for(let i=0;i<len;i++){
    res.push(eveInd[i])
    res.push(oddInd[i])
    
}
return res

};