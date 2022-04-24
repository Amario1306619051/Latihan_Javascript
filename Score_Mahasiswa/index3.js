let alexanderArnold = [
    {
        Nama : 'Amario',
        Betul: 10,
        Salah: 0,
        Kosong:0
    },
    {
        Nama: "Pridana",
        Betul: 8,
        Salah: 2,
        Kosong: 0
    },
    {
        Nama: "Muhlis",
        Betul:7,
        Salah:1,
        Kosong:2
    },
    {
        Nama: "Wildan",
        Betul: 7,
        Salah: 2,
        Kosong: 1
    }
]

const Score = (person) =>{
    let Total = 0;
    let Himpunan = [];
    for (let i of person){
        Total = i.Betul*4 - i.Salah
        Himpunan.push({
            Nama: i.Nama,
            Betul: i.Betul,
            Salah: i.Salah,
            Kosong: i.Kosong,
            accumulatedScore : Total
        })
    }
    return Himpunan
} 

console.log(Score(alexanderArnold))