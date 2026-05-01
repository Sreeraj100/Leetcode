/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    let ans =[]
    let last =s[0]
    ans.push(last)
    let count = 1
    for (let i=1;i<s.length;i++){
        if (s[i]===last){
            count++
            if(count<3)ans.push(s[i])
        } else{
            last=s[i]
            count=1
            ans.push(s[i])
        }
    }
    return ans.join('')
};