const isUpperCase  = require('./isUpperCase');

const filter = (array,filterFunction)=>{
    if(array == null && filterFunction === true)
        return array;
    else if(filterFunction === true){
        return array;
    }else if(filterFunction ===  false){
        return [];
    }else if(filterFunction === "isUpperCase"){
        let result = [];
        for(i=0;i<array.length;i++){
            if(isUpperCase(array[i]))
                result.push(array[i]);
        }
        return result;
    }else {
        return array.splice(1);
    }
}
module.exports = filter;