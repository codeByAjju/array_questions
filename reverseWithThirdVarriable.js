let arr = [1,2,3,4,5,6,7,8,9,10];
let reverse = [];
for(let i=arr.length; i>=0; i--){
    reverse = reverse.push(arr[i]);    
}
console.log(reverse);