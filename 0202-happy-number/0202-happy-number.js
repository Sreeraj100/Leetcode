/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let num=0
  let arr=[]
  while(num!=1){
    if(arr.includes(n)){
        return false;
    }
let nums=n.toString().split('')
num=nums.map((a)=>a*a).reduce((a,c)=>a+c,0)
arr.push(n)
n=num

  }  
  if(num==1){
    return true
  }else{
   return false
  }
};