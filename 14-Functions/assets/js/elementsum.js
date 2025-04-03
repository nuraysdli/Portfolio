let arr = [14, 20, 35, 40, 57, 60, 100]

function elementsum(arr){
    let sum =0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 4 == 0 && arr[i] % 5 == 0){
            sum += arr[i];
        }
    }
    return sum;
}

console.log(elementsum(arr))