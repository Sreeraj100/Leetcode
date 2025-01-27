/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {

 let sorted =[]
 for(let i=0;i<heights.length;i++){
     sorted.push(heights[i])
 }
 sorted.sort((a,b)=>a-b)
 let count=0
 for(let i=0;i<heights.length;i++){
    if(heights[i]!==sorted[i]){
     count++
     
    }
 }   
return count

};