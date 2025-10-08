/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let arr=['a','e','i','o','u']
    let obj={}
    let obj2={}
    let v=0 ,c=0
    for(let i of s){
        if(arr.includes(i)){
            obj[i]?obj[i]++:obj[i]=1
            v++
        }else{
            obj2[i]?obj2[i]++:obj2[i]=1
            c++
        }
    }

    if(v==0) return Math.max(...Object.values(obj2))
    if(c==0) return Math.max(...Object.values(obj))

    let freq=Math.max(...Object.values(obj))
    let freq2=Math.max(...Object.values(obj2))

    return freq+freq2
};