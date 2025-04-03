let sum = (x, y) => x + y;
let sub = (x, y) => x - y;
let mult = (x, y) => x * y;
let div = (x, y) => x / y;

let calculate = (m, n, process) => {
    return process(m, n);
};

console.log(calculate(20, 5, div));