// console.log(localStorage)
let userName = document.querySelector('#userName');
let email = document.querySelector('#email');
let hours = document.querySelector('#hours');

let id = localStorage.id
let token = localStorage.token

fetch(`http://localhost:3000/users/${id}`,{
    headers: { 
        "Authorization": token
    }
    })
    .then(r => r.json())
    .then(data => {
    //// saving user data 
        localStorage.username = data.username
        localStorage.email = data.email
        localStorage.credit = data.credit? data.credit:'0'
        
         
})
    /// changing profile user data input
    userName.innerHTML = localStorage.username;
    email.innerHTML = localStorage.email
    hours.innerHTML = localStorage.credit