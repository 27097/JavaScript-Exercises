function mdArraySum(arr) {
    // // Your code here: forma 1
    // let arrays = arr.flat(6)
    // let suma = 0;
    // arrays.forEach(element => {
    //     suma += element
    // });
    // return suma
   
   
    // Your code here: forma 2
//    arr.reduce((total, item)=> total + (Array.isArray(item) ? mdArraySum(item) )  )


}
console.log(mdArraySum( [ 2, [3,4], [5], [-3, [6 , [ 4,5 ] ] ] ]));
module.exports = mdArraySum;