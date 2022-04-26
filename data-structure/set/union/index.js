const mammals = new Set(['Dog', 'Cat', 'Whale', 'Cow', 'Dolphin', 'Sheep', 'Giraffe'])
const aquatic = new Set(['Whale', 'Squid', 'Dolphin', 'Octopus', 'Jellyfish', 'Crab'])

function union(setA, setB) {
    let _union = new Set(setA)
    for (let elem of setB) {
        _union.add(elem)
    }
    return _union
}
console.log(union(mammals,aquatic))