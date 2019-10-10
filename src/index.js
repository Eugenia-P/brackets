module.exports = function check(str, bracketsConfig) {

  let strBrackets = bracketsConfig.join('').split(',').join(''); 
   
  for (let i = 0; i < str.length; i++) {
    let pos = -1; 

    for (let j = 0; j < strBrackets.length; j+=2) {
      let sample = strBrackets.substr(j, 2); 

      if ((pos = str.indexOf(sample)) !== -1) {
        str = str.slice(0, pos).concat(str.slice(pos + 2));
        i = (i === 0) ? i = 0 : i -= 1;
      }
    }
  }

  return str.length === 0 ? true : false; 
}
