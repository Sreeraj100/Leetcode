/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function(n) {
     let cnt = 0;
    for(let i = 2;i<n;i++){
        if(n % i == 0){
            cnt ++;
        }
    }
    if(cnt == 1){
        return true
    }
    return false 
};