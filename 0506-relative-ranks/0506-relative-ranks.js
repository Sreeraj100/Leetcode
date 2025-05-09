/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {

let arr=[...score]
arr.sort((a,b)=>b-a)
console.log(arr)
for(let i=0;i<score.length;i++){
    if(score[i]==arr[0]){
     score[i]="Gold Medal"
    }else if(score[i]==arr[1]){
    score[i]="Silver Medal"
    }else if(score[i]==arr[2]){
    score[i]= "Bronze Medal"
    }else{
       let position= arr.indexOf(score[i])+1
       score[i]=position.toString()
     
    }
}

return score

};