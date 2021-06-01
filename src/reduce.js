const reduce = (array,reducerFunc,targetValue)=>{
    if( array.length === 0)
        return targetValue;
    else if( targetValue ==  undefined){
        let result="";
        for(i=0;i<array.length;i++){
            result += array[i];
        }
        return result;
    }else{
        let result= targetValue;
        for(i=0;i<array.length;i++){
            result += array[i];
        }
        return result;
    }
    
}
module.exports = reduce;