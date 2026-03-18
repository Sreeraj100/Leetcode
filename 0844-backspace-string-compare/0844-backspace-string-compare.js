/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  return process(s.split(''))===process(t.split(''))
 
};

let process=(arr)=>{
let res=[]
for(let i of arr){
    if(i==='#'){
        res.pop()
    }else{
        res.push(i)
    }
}
 return res.join('')
}