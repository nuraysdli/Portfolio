let content = [
    {name: "Nuray", age: 19},
    {name: "Valide", age: 21,},
    {name: "Meryem", age: 20},
    {name: "Beyim", age: 20}
];

function objectfunc(content){
    let minAge = content[0].age;
    let maxAge = content[0].age;
    for (let i = 1; i < content.length; i++) {
        if(content[i].age < minAge){
            minAge = content[i].age;
        }
        if(content[i].age > maxAge){
            maxAge = content[i].age;
        }
    }

    sub = maxAge - minAge;

    return {minAge, maxAge, sub};
}

console.log(objectfunc(content));