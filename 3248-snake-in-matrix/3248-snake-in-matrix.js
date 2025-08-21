/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function(n, commands) {
  let count=0
  for(let i=0;i<commands.length;i++){
    if(commands[i]=="DOWN"){
        count+=n
    }else if(commands[i]=="UP" && count>=n){
        count-=n
    }else if(commands[i]=="RIGHT"){
        count++
    }else if(commands[i]=="LEFT" && count>0){
        count--
    }
  }  
  return count
};