const arr = [25,35,1,7,9,25,2,3,4,9,0];

const even = [];
const odd = [];

for(let i=0; i<arr.length; i++){
    if(arr[i] % 2 == 0){
        even.push(arr[i]);
    }
    odd.push(arr[i]);
}
console.log(`${even} ${odd}`);
console.log("it is even : ",even);
console.log("it is odd : ",odd);