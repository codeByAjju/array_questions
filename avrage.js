const arr = [1,2,3,4,5,6,7,8,9];
let sum = 0;
for(let i = 0; i<arr.length; i++){
    sum = arr[i]+sum
}
let avg = sum/arr.length;
console.log("it is sum ",sum)
console.log("it is avg ",avg)