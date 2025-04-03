let arr = [203, 19, 2, 13, 196, 86, 35, 77];

let min= arr[0];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
    if (arr[i] > max) {
        max = arr[i];
    }
}

let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== min && arr[i] !== max) {
        sum += arr[i];
    }
}

console.log(sum)