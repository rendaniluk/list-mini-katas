module.exports = function(list){
    var firstVal = list[0];
    var index = list.length-1;

    list[0] = list[index];
    list[index] = firstVal;

    return list;
}
