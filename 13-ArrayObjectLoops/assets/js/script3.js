const users = [
    { name: "Ali", age: 25 },
    { name: "Veli", age: 35 },
    { name: "Aysel", age: 28 },
    { name: "Kamran", age: 40 },
    { name: "Leyla", age: 22 },
    { name: "Eldar", age: 31 }
];

console.log("30-dan kicik olanlar:");
for (let i = 0; i < users.length; i++) {
    if (users[i].age >= 30) continue;
    console.log(users[i].name, "-", users[i].age);
}

console.log("\n30-dan boyuk olanlar:");
for (let i = 0; i < users.length; i++) {
    if (users[i].age <= 30) continue;
    console.log(users[i].name, "-", users[i].age);
}
