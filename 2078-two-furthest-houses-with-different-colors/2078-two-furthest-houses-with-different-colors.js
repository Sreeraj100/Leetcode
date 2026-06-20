/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
   let n = colors.length - 1
    let dis = 0

    for(let i = 0; i < n; i++){
        if(colors[i] !== colors[n]){
            dis = Math.max(dis, n - i)
            break
        }
    }

    for(let i = n; i >= 0; i--){
        if(colors[i] !== colors[0]){
            dis = Math.max(dis, i)
            break
        }
    }

    return dis 
};