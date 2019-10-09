module.exports = function check(str, bracketsConfig) {
  const strArr = str.split(''); 

    function diff(a, b) {
      return a.filter(function(i) {return a === b;});
  };

  return diff(strArr, bracketsConfig) == false ? true : false;
}
