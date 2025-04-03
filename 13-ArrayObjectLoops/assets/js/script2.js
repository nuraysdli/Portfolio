const multiplicationTable = [];

for (let i = 1; i <= 10; i++) {
    let row = [];
    for (let j = 1; j <= 10; j++) {
        row.push(i * j);
    }
    multiplicationTable.push(row);
}

for (let i = 0; i < multiplicationTable.length; i++) {
    let rowString = "";
    for (let j = 0; j < multiplicationTable[i].length; j++) {
        rowString += multiplicationTable[i][j] + " ";
    }
    console.log("Row " + (i + 1) + ":", rowString);
}
