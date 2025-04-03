let arrow = (...numbers) => {
    let evenNumbers = [];
    let oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] % 2 == 0){
            evenNumbers.push(numbers[i]);
        } else{
            oddNumbers.push(numbers[i]);
        }
    }
    console.log("cut ededler:", evenNumbers);
    console.log("tek ededler:", oddNumbers);
}

arrow(14, 20, 35, 40, 57, 60, 100);