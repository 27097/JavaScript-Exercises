function FindNeedle(haystack, needle) {
    // iterar sobre el haystack
    for (let i = 0; i < haystack.length; i += 1) {
    
      if(haystack[i]===needle[0]){
        if (haystack.slice(i, i + needle.length) === needle) return i
      }
    }
    
    return -1;
  }

console.log(FindNeedle("react-redux","redux"));


module.exports = FindNeedle;