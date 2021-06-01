const cube =  require('./cube');

const map = (array,string)=>{
    if(array == null)
        return('[]');
    else if( string == "cube"){
        for( i=0;i<array.length;i++){
            array[i] = cube(array[i]);
        }
        return array;
    }
    else if( string == "identity")
    return array;
}
module.exports = map;