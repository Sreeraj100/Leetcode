/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    let arr=[]
    let temp=[]
    while(nums.length>0){
        for(let i=0;i<nums.length;i++){
            if(!temp.includes(nums[i])){
              temp.push(nums[i]) 
              nums.splice(i,1)
              i--
            }
        }
       arr.push(temp)
       temp=[]
    }
   return arr
};