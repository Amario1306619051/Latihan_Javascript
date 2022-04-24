let alexanderArnold = [
    {
        Nama: "Amario",
        Tahun: 2001
    },
    {
        Nama: "Pridana",
        Tahun: 2000
    },
    {
        Nama: "Muhlis",
        Tahun: 1999
    },
    {
        Nama: 'Rayhan',
        Tahun: 2002
    },
    {
        Nama: "Wildan",
        Tahun: 1998
    }
]

const andrewRobertson = (person) => {
    if(person.Tahun % 2 == 0){
        return true
    }
    else{
        return false
    }

}
const sadioMane = (person,callback) => {
    let a = [];
    let b = [];
    for(let k of person){
        let d = callback(k)
        if(d == true){
            a.push(k)
        }
        else{
            b.push(k)
        }
    }
    return{
        true: a,
        false: b
    }
}

console.log(sadioMane(alexanderArnold,andrewRobertson))