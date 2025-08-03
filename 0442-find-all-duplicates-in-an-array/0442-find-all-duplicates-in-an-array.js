/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
 
    if(nums.length){
    let obj={}
    let arr=[]
    for(let i of nums){
      obj[i]?obj[i]++:obj[i]=1
    }
    for(let i in obj){
      if(obj[i]==2){
        arr.push(Number(i))
    }
    } 
   return arr
    }else{
        return []
    }
   
};