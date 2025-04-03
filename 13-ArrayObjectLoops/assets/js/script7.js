let arr = [12, 45, 2, 89, 34, 7, 90, 11, 56, 78];

let min= 0;
let max = 0;

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[min]) {
        min = i;
    }
    if (arr[i] > arr[max]) {
        max = i;
    }
}

let temp = arr[min];
arr[min] = arr[max];
arr[max] = temp;

console.log(arr);
