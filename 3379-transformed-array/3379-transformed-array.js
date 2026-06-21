/**
 * @param {number[]} nums
 * @return {number[]}
 */
var constructTransformedArray = function(nums) {
    let n=nums.length
    let res=[]
    for(let i=0;i<n;i++){
       let j=(i+nums[i])%n
        if(j<0){
          j+=n
        }
        res[i]=nums[j]   
    }
    return res
};