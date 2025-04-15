/**
 * @param {number[]} nums
 * @return {number}
 */
var duplicateNumbersXOR = function(nums) {
let freq={}
let dup=[]
let res=0
for(let i=0;i<nums.length;i++){
if(freq[nums[i]]){
   freq[nums[i]]++ 
}else{
    freq[nums[i]]=1
}
}
for(let i in freq){
    if(freq[i]==2){
        dup.push(i)
    }
}
for(let i=0;i<dup.length;i++){
res^=dup[i]
}
if(dup.length!=0){
return res
}else{
    return 0
}





};