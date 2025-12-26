/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    let a= Math.abs(z-x)
    let b= Math.abs(z-y)
    if(a<b){
        return 1
    }else if(a>b){
        return 2
    }else{
        return 0
    }
};