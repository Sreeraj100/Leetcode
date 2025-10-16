/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function(order, friends) {
    let out=[]
    for(let i=0;i<order.length;i++){
     if(friends.includes(order[i])){
        out.push(order[i])
     }
    }
    return out
};