/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let arr=[...new Set(nums)]
    arr.sort((a,b)=>b-a)

  if(arr.length<3){
    return Math.max(...arr)
  }else{
    return arr[2]
  }

};