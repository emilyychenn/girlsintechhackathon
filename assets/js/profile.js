let userName = document.querySelector('#userName');
let email = document.querySelector('#email');
let hours = document.querySelector('#hours');

userName.innerHTML = "Xiameng";
email.innerHTML = "xiameng.chen@outlook.com"
hours.innerHTML = "90";

fetch(`http://localhost:3000/users/${id}`,{
    headers: { 
        "Authorization": token
    }
    })
    .then(r => r.json())
    .then(data => {
        console.log(data)
})