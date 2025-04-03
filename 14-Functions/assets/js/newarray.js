let arr = [2,4,6,8]

function newarr(arr){
    let newarray = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i]**2;
        newarray.push(arr[i])
    }
    return newarray;
}

console.log(newarr(arr));