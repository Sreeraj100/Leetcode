/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    

let arr=[]
for(let i=0;i<nums1.length;i++){
if(nums2.includes(nums1[i])){
let ind=nums2.indexOf(nums1[i])    
let lar=0
for(let k=ind;k<nums2.length;k++){
    if(nums2[ind]<nums2[k]&& lar<nums2[k]){
        lar=nums2[k]
        break
    }
}
if(lar==0){
    arr.push(-1)
}else{
    arr.push(lar)
}    
    
}else{
    arr.push(-1)
}
}
return arr

};