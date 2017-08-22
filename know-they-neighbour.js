module.exports = function(list){
    for (var i = 0; i < list.length; i++) {
      var currentVal = list[i];

      var right = list[i+1];

      if (currentVal > right) {
        list[i] = right;
        list[i+1] = currentVal;
      }
    }
    return list;
}
