/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let out=[]
    let evn=[]
    let odd=[]
    for(let i=0;i<nums.length;i++){
        if(nums[i]%2==0){
            evn.push(nums[i])
        }else{
            odd.push(nums[i])
        }
    }
for(let j=0;j<evn.length;j++){
    out.push(evn[j])
    out.push(odd[j])
}


return out
};