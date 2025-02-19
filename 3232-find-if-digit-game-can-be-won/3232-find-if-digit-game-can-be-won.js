/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    let single=[]
    let double=[]
   for(let i=0;i<nums.length;i++){
   if(nums[i]>=10){
   double.push(nums[i])
   }else{
    single.push(nums[i])
   }
   } 
let alice =single.reduce((acc,curr)=>acc+curr,0)
let bob =double.reduce((acc,curr)=>acc+curr,0)

if(bob<alice){
    return true
}else if(bob==alice){
    return false
}else{
    return true
}

};