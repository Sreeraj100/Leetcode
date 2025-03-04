/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let out={}
    let arr=[]
    // let len = Math.max(list1.length,list2.length)
    for(let i=0;i<list1.length;i++){
      if(list2.includes(list1[i])){
        out[list1[i]]=i+list2.indexOf(list1[i])
      }
    }
    let min =Math.min(...Object.values(out))
    for(let val in out){
        if(out[val]==min){
            arr.push(val)
        }
    }
//      Object.keys(object).find(key => object[key] === value);

//   arr.push(getKeyByValue(out, min))
  return arr

};