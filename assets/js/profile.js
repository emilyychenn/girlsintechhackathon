// console.log(localStorage)
let userName = document.querySelector('#userName');
let email = document.querySelector('#email');
let hours = document.querySelector('#hours');

let editForm = document.getElementById('edit-form')
let editUsername = document.getElementById('edit-username')
let editEmail = document.getElementById('edit-email')
let editPassword = document.getElementById('edit-password')

let deleteBtn = document.getElementById('delete-user')


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
        localStorage.password = data.password
        
        
        
         
})
    /// changing profile user data input
    userName.innerHTML = localStorage.username;
    email.innerHTML = localStorage.email
    hours.innerHTML = localStorage.credit


    editUsername.placeholder = localStorage.username
    editEmail.placeholder = localStorage.email
    

editForm.addEventListener('submit', (evt) => {
    evt.preventDefault()

    let username = evt.target['username'].value
    let email = evt.target['email'].value

    fetch(`http://localhost:3000/users/${id}`, {
        method: 'PATCH',
        headers:{
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            email:  email
        })
    })
    .then(r =>  r.json())
    .then(console.log)
}
)

deleteBtn.addEventListener('click', () => {
    localStorage.clear()
    
    fetch(`http://localhost:3000/users/${id}`, {
        method: 'DELETE'
    })
    .then(r => r.json())
    .then(console.log)

}
)