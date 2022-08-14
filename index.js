// import { json } from "body-parser";
// import { create } from "domain";
// import { application, response } from "express";
// import { request } from "http";


console.log('jeb');

window.addEventListener("DOMContentLoaded", () =>{

function req(){
    const request = new XMLHttpRequest()
    request.open("GET","http://localhost:3000/people"),
    request.setRequestHeader("Content-type", "application/json; charset=utf-8")
    request.send();
    request.addEventListener("load", function(){
        if (request.status == 200){
            let data = JSON.parse(request.response);
            console.log(data);
            
            data.forEach(item => {
                let card =document.createElement('div')
                card.classList.add('card');

                card.innerHTML =`
                        <img src="${item.photo}" width="40px" alt="photo>"
                        <div class="name">${item.name}</div>
                        <div class="age">${item.age}</div>`;
                document.querySelector(".app").appendChild(card);
                
            });
        }
        else {
            console.error("ne tak");
        }
      
    
    });
        
    }
    req();

    

    
    // document.querySelector("button").addEventListener("click", req, {"once":true});

    // function createCards(response){
    //     response.forEach(item=>{
    //         let card = document.createElement('div');

    //         card.classList.add('card');

    //         let icon;response
    //     })
    // }


})



