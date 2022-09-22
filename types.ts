export { }

// types are declared using colons :
let a: number = 10
let b: boolean;
let c: object;

a = 1.325
b = false
c = { name: "aman" }

/* *************************************************************************************** */




/* working with arrays */
const data = ["aman", "guddu", "ganga"]
//since humne sari string values di h, toh automatically ts ise string ka datatype assign krdega
// ab is data main main sirf string push kr skta hu 
data.push('peter')


/* mixed array */
const data1 = ["aman", 120, false] /* ab isme koi b value push kr skte h */

/* string array can be defined by string[] datatype */
const data2: string[] = ["aman", "cat"]  /* ab sirf string hi push kr skte h */

