/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let arr=[]
    let arr2=[]
    if(nums.includes(target)){
     for(let i=0;i<nums.length;i++){
    if(nums[i]==target){
      arr.push(i)
    }

    }
    if(arr.length==1){
        arr.push(arr[0])
        return arr
    }else if(arr.length>2){
        arr2.push(arr[0])
        arr2.push(arr[arr.length-1])
        return arr2
    }else{
        return arr
    }
   
    
    
    }else{
        return [-1,-1]
    }
   
};