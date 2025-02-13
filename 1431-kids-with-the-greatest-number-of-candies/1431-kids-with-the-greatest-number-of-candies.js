/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
   let out=[]
   for(let i=0;i<candies.length;i++){
   let count=candies[i]+extraCandies
   if(count>=Math.max(...candies)){
     out.push(true)
   }else{
    out.push(false)
   }
   } 
   return out
};