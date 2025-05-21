/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
let res=[]
let arr=[...heights]
arr.sort((a,b)=>b-a)
for(let i=0;i<arr.length;i++){
    res.push(names[heights.indexOf(arr[i])])
}
return res

};