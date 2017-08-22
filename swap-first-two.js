module.exports = function(list){
    var val1 = list[0];
    list[0] = list[1];
    list[1] = val1;

    return list;
}
