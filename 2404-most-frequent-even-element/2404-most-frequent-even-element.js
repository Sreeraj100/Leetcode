/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
 let arr=nums.filter((n)=>n%2==0) 
 if(arr.length==0){
    return -1
 }
 let obj={}
 for(let val of arr){
 obj[val]?obj[val]++:obj[val]=1
 }
 let out=[]
 let lar=0
 for(let i in obj){
    if(lar<obj[i]){
        lar=obj[i]
    }
 }
 for(let j in obj){
    if(obj[j]==lar){
        out.push(j)
    }
 }
 return Math.min(...out)
};