
module.exports = {
  list: [],
  storeNumber: function(number){
    module.exports.list.push(number)
    console.log(module.exports.list);
  },
  sortList: function(unsortedList){
    unsortedList.sort(function(a,b){
      return a - b;
    });
    var sortedList = unsortedList;
    console.log(sortedList)
    return sortedList;
  },
}