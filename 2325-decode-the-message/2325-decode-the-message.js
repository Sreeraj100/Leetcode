/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    let letters=key.split(' ').join('')
    let alp="abcdefghijklmnopqrstuvwxyz"
    let str=''
    let result=''
    for(let i of letters){
        if(!str.includes(i)){
            str+=i
        }
    }
    for(let i=0;i<message.length;i++){
        if(message[i]===' '){
            result+=" "
        }else{
            result+=alp[str.indexOf(message[i])]
        }
    }
    return result
};