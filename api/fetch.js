let message = '20'
var a = ''
fetch('https://jsonplaceholder.typicode.com/posts/'+ message)
    .then(res => res.json())
    .then(data => {console.log(data) })
    .catch(eror => console.log('eror'))
console.log(a)
