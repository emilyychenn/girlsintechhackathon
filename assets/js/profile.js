
let userName = document.querySelector('#userName');
let email = document.querySelector('#email');
let hours = document.querySelector('#hours');

let editForm = document.getElementById('edit-form')
let editUsername = document.getElementById('edit-username')
let editEmail = document.getElementById('edit-email')
let editPassword = document.getElementById('edit-password')

let deleteBtn = document.getElementById('delete-user')
class Profile{
  
    constructor(userObj){
        
        this.id = userObj.id
        this.username = userObj.userName
        this.first_name = userObj.first_name
        this.last_name = userObj.last_name
        this.email = userObj.email
        this.average_volunteer_rating = userObj.average_volunteer_rating
        this.credit = userObj.credit
        this.is_volunteer = userObj.is_volunteer
        this.volunteer_appointments = userObj.volunteer_appointments
        this.volunteers = userObj.volunteers
        this.client_appointments = userObj.client_appointments
        this.clients = userObj.clients
        
    }
    


   

//     /// changing profile user data input
//     userName.innerHTML = localStorage.username;
//     email.innerHTML = localStorage.email
//     hours.innerHTML = localStorage.credit


//     editUsername.placeholder = localStorage.username
//     editEmail.placeholder = localStorage.email
    

// editForm.addEventListener('submit', (evt) => {
//     evt.preventDefault()

//     let username = evt.target['username'].value
//     let email = evt.target['email'].value

//     fetch(`https://blooming-wave-77750.herokuapp.com/users/${id}`, {
//         method: 'PATCH',
//         headers:{
//             'content-type': 'application/json',
//             'accept': 'application/json'
//         },
//         body: JSON.stringify({
//             username: username,
//             email:  email
//         })
//     })
//     .then(r =>  r.json())
//     .then(console.log)
// }
// )

// deleteBtn.addEventListener('click', () => {
//     localStorage.clear()
    
//     fetch(`https://blooming-wave-77750.herokuapp.com/users/${id}`, {
//         method: 'DELETE'
//     })
//     .then(r => r.json())
//     .then(console.log)

// }
// )
}
// console.log(localStorage)
