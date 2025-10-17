/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
let five=[]
let ten=[]
// let arr=[]
for(let i=0;i<bills.length;i++){
    if(bills[i]==5){
        five.push(bills[i])
    }else if(bills[i]==10){
     if(five.includes(5)){
        five.pop()
        ten.push(bills[i])
     }else{
        return false
     }
    }else if(bills[i]==20){
    if(five.length && ten.length){
       five.pop()
       ten.pop()
     }else if(five.length>3){
      five.pop()
      five.pop()
      five.pop()
    }else{
        return false
     }

    }
}

return true

};