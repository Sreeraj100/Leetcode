/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let first="qwertyuiop"
    let sec="asdfghjkl"
    let third="zxcvbnm"
    let out=[]
    for(let i=0;i<words.length;i++){
        if(first.includes(words[i][0].toLowerCase())){
             for(let j=0;j<words[i].length;){
            if(first.includes(words[i][j].toLowerCase())){
                j++
                if(j==words[i].length){
                    out.push(words[i])
                }
            }else{
                break
            }
        }
        }
        else if(sec.includes(words[i][0].toLowerCase())){
             for(let j=0;j<words[i].length;){
            if(sec.includes(words[i][j].toLowerCase())){
                j++
                if(j==words[i].length){
                    out.push(words[i])
                }
            }else{
                break
            }
        }
        }
         else if(third.includes(words[i][0].toLowerCase())){
             for(let j=0;j<words[i].length;){
            if(third.includes(words[i][j].toLowerCase())){
                j++
                if(j==words[i].length){
                    out.push(words[i])
                }
            }else{
                break
            }
        }
        }
       
    }
    return out
};