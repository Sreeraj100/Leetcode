/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    for(let i of image){
        i.reverse()
        for(let j=0;j<i.length;j++){
            if(i[j]==0){
                i[j]=1
            }else{
                i[j]=0
            }
        }
    }
    return image
};