/**
 * @param {number[][]} grid
 * @return {number}
 */
var findChampion = function(grid) {
  let max=0
  let ind=0
  for(let i=0;i<grid.length;i++){
    let score=Math.max(max,grid[i].reduce((a,c)=>a+c,0))
    if(max<score){ 
    max=score
    ind=i
    }
  }
  return ind
};