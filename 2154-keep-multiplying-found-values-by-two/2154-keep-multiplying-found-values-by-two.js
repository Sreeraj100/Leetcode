/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {

    let i =0
    while(nums.length>=i){
    if(nums.includes(original)){
        original =  2 * original
    }else{
        return original
    }
    i++
    }

};