let arr = [203, 19, 2, 13, 196, 86, 35, 77];

let number = prompt("ededi daxil edin:");

let found = false;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == number) {
        found = true;
        break;
    }
}

if (found) {
    alert(`${number} array-de var.`);
} else {
    alert(`${number} array-de yoxdur.`);
}
