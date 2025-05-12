/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  nums.sort((a,b)=>a-b)
  let arr=[]
  let obj={}
  for(let i=0;i<nums.length;i++){
    if(obj[nums[i]]){
       obj[nums[i]]++ 
    }else{
        obj[nums[i]]=1
    }
  }

for(let val in obj){
    if(obj[val]>1){
    arr.push(Number(val))
    }
}

for(let i=0;i<nums.length;i++){
if(nums[i]!=i+1){
    arr.push(i+1)
}

}
for(let i=0;i<arr.length;i++){
   
if(obj[arr[i]]==1){
    arr.splice(arr.indexOf(arr[i]),1)
    i--
}

}
return arr

};