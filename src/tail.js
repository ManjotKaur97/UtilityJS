const tail = (array) => {
    if(array == null)
        return array;
    return array.slice(1);  
}
module.exports = tail;
