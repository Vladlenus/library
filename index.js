
document.querySelector('.btn').onclick= f1
document.querySelector('.btn').onclick= n1
document.querySelector('.btn2').onclick= f2

function f1(){
    let a=document.querySelector('.inp').value;
    c=a;
    console.log(c);
    document.body.style.margin = '20px';
    return c;
    
}
function n1(){
    let a=document.querySelector('.name').value;
    b=a;
    console.log(b);
    return b;
    
}

function f2(){
fetch ('http://63054b1b697408f7edc49ae4.mockapi.io/tasks',{
    method:'POST',
    headers:{
        'Content-type': 'application/json'
    },
    body: JSON.stringify({
        text:f1(),
        name: n1()
   
})})
.then(res=>res.json())
.then(data=>document.getElementById('root').innerHTML= JSON.stringify(data))

.then(data =>console.log(data))
.catch(error =>{console.log(error)})

}
