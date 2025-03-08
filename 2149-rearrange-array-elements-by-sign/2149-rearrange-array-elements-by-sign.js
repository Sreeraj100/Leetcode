/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let neg=[]
    let pos=[]
    let output=[]
  for(let i=0;i<nums.length;i++){
if(nums[i]<0){
 neg.push(nums[i])
}else{
    pos.push(nums[i])
}
  }  
for(let j=0; j<pos.length;j++){
 output.push(pos[j])
 output.push(neg[j])
}

return output
};