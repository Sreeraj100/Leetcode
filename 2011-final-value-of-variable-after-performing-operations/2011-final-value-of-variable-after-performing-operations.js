/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
 let a=0
 for(let i=0;i<operations.length;i++){
   if(operations[i]=="--X"){
    --a
   }else if(operations[i]=="X--"){
    a--
   }else if(operations[i]=="X++"){
    a++
   }else{
    ++a
   }
  
 }


return a
};