/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
   title = title.toLowerCase()
 let arr=title.split(' ')
for(let i=0;i<arr.length;i++){
  if(arr[i].length>2){
      arr[i]=arr[i][0].toUpperCase() + arr[i].split("").slice(1,arr[i].length).join("")+" "

  }else{
    arr[i]=arr[i]+" "
  }
    
}
return arr.join('').trim()  
};