const arr = [5,10,1,25,35,45,55,75];
let min = arr[0];
let max = arr[0];

for(let i=1; i<arr.length; i++){
    if(arr[i] < min){
        min =arr[i];
    }
    if(arr[i]>max){
        max = arr[i];
    }
}
console.log(arr);
console.log("it is max : ",max)
console.log("it is min : ",min)