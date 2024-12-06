/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let absent=0
    let present=0
    for(let i=0;i<s.length;i++){

        if(s[i]=='A'){
            absent++
            
        }else if(s[i]=='P'){
            present++
            
        }
    }
    if(absent>1){
        return false
    }
    if(s.includes('LLL')){
        return false
    }else{
        return true
    }
};