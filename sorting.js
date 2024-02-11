const arr = [25,35,1,7,9,25,2,3,4,9,0];

for(let i=0; i<arr.length-1; i++){
    for(let j=i+1; j<arr.length; j++){
        if(arr[i]>arr[j]){
            let temp = arr[i];
            arr[i]= arr[j];
            arr[j]= temp
        }
    }
}
console.log(arr)