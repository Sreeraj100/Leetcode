/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
        let count=n
        for(let i =0; i<flowerbed.length; i++){
        let curr= flowerbed[i]
        if(curr==1) continue
        if(curr==0){
            let left = (flowerbed[i-1]==0) || (i==0)
            let right = (flowerbed[i+1]==0) || (i==flowerbed.length-1)
            if(left && right){
                count--
                flowerbed[i]=1
            }
            if(count<=0) return true
        }
    }
    return count<=0

};