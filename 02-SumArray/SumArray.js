function SumArray(arr, n) {
    // Your code here:
    for (let i = 0; i < arr.length; i++) {
           for (let j = 0; j < arr.length; j++) {
               if(arr[i] + arr[j] === n) return true
               
           }        
    }
    return false
}

console.log(SumArray([1,2,3,4], 9));
module.exports = SumArray;
