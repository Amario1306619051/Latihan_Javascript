let status = true
const ditepati = new Promise((resolve, reject) => {
    if(status){
        resolve('Janji ditepati')
    }else{
        reject('Janji diinkari')
    }
})

ditepati
    .then(response => console.log(response))
    .catch(response => console.log(response))

