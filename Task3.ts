//Push at end.
console.log("\n -- PUSH -- \n");
let arr : number[] = [2,3,4,5,5,6,7,8,1,2,3,4,4];
arr.push(99);
console.log("Array after push: " + arr);

//Pop (From end of an array)
console.log("\n -- POP -- \n");
console.log(arr.pop());

//Shift (remove 1st element)
console.log("\n -- SHIFT -- \n");
arr.shift();
console.log("After removing first element: " + arr);

//unshift(adding element at start)
console.log("\n -- UNSHIFT -- \n");
arr.unshift(100, 200);
console.log("After adding elements to beginning: " + arr);

//splice (remove element starting from index 2)
console.log("\n -- SPLICE -- \n");
const spliced = arr.splice(2, 2);
console.log("After deleting two elements from index 2 and remaning subarray after splice: " + spliced);

//slice (takes elements from 1 and 3 index and display after that)
console.log("\n -- SLICE -- \n");
const sliced =arr.slice(1, 3);
console.log("Sliced array between indexes 1 and 3 : "+ sliced);
