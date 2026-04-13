/**
 * @param {string} s
 * @return {string}
 */
var trimTrailingVowels = function(s) {
    let v=['a','e','i','o','u']
    let arr=s.split('')
    while(arr.length>=0){
        if(v.includes(arr[arr.length-1])){
            arr.pop()
        }else{
            break
        }
    }
    return arr.join('')
};