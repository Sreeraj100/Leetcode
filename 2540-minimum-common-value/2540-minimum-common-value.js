/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    let out=[]

    for(let i=0;i<nums1.length;i++){
        if(nums2.includes(nums1[i])&& !out.includes(nums1[i])){
            out.push(nums1[i])
        }
    }
    if(out.length){
        return Math.min(...out)
    }else{
        return -1
    }

};