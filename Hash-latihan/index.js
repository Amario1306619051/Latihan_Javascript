function ageDistribution(persons) {
    let result = new Map();
    let n = 1;
    for(let k of persons){
        if(result.has(k.Map)){
            result.set(k.age, n + 1);
        }
        else{
            result.set(k.age, n)
        }
    }
    return result
}

function groupByAge(persons) {
    let result = new Map();
    // TODO: answer here
    for (let person of persons) {
        if (result.has(person.age)) {
            result.get(person.age).push(person);
        }else {
            result.set(person.age,[person]);
        }
    }
    return result
}

let people = [
    { name: "Bob", age: 21 },
    { name: "Sam", age: 28 },
    { name: "Ann", age: 21 },
    { name: "Joe", age: 22 },
    { name: "Ben", age: 28 },
]

console.log(ageDistribution(people));
console.log(groupByAge(people));