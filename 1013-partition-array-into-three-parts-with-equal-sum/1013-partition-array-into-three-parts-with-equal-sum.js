/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function(arr) {
    let sum=arr.reduce((acc,cur)=>acc+cur,0)
    if (sum % 3!== 0){
        return false
    }
    let partitionsum =Math.floor(sum/3)
    let currentsum = 0;
    let partition = 0;
    for (let i=0;i<arr.length;i++){
        currentsum += arr[i]
        if (currentsum==partitionsum){
            partition+=1;
            currentsum=0;
        }
        
        if (partition==3){
            return true;
        }
    }
  return false;
};