function intersection(setA, setB) {
    let result = new Set();
    
    let yoho = []
    for(let i  of setA){
        if(setB.has(i)){
            result.add(i)
        }
    }
    return result; // TODO: replace this
}

let setA = new Set(["Java", "Python", "Javascript", "C ++", "C#"]);
let setB = new Set(["Java", "Python"]);
console.log(intersection(setA, setB)); // {"Java", "Python"}

setA = new Set("Java", "Python");
setB = new Set("Swift");
console.log(intersection(setA, setB)); // {}