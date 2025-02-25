/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var satisfiesConditions = function(grid) {
 let out = true
 for(let i=0;i<grid.length-1;i++){
 for(let j=0;j<grid[i].length;j++){
    if(grid[i][j] != grid[i+1][j]) {
        out = false
        break
    }
  }
}

return out


};