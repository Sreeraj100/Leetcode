/**
 * @param {number[][]} tasks
 * @return {number}
 */
var earliestTime = function(tasks) {
   let arr=[]
   for(let i=0;i<tasks.length;i++){
    arr.push(tasks[i].reduce((a,c)=>a+c,0))
   }
   return Math.min(...arr)
};