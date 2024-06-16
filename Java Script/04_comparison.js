// console.log("2"==1);
// console.log("02">1)
 

// avoid all such comparisons of different data types in your code
console.log(null>0);
console.log(null==0);
console.log(null>=0)
// here null is converted to a number when we do comparison(>,>=,<,<=) but remains the same in ==.
//same for undefined  but it gives false for all 3 above cases//