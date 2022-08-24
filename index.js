
// function f1(){
//     let a=+document.querySelector('.inp').value;
//     b=a;
//     console.log(b);
//     return b;
    
// }

// f1()

fetch ('https://63054b1b697408f7edc49ae4.mockapi.io/tasks', {
    method:'POST',
    headers:{
        'Content-type': 'application/json'
    },
    body: JSON.stringify({
    name: 'sds'
})})
.then(res=>res.json())
.then(data=>document.getElementById('root').innerHTML= JSON.stringify(data))
.catch(error =>{console.log(error)})
// fetch ("https://63054b1b697408f7edc49ae4.mockapi.io/tasks")
// .then(res => res.json())
// .then(data => document.getElementById('root').innerHTML= JSON.stringify(data))


