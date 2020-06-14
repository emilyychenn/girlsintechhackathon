


let userName = document.querySelector('#userName');
let email = document.querySelector('#email');
let hours = document.querySelector('#hours');
let editForm = document.getElementById('edit-form')
let editUsername = document.getElementById('edit-username')
let editEmail = document.getElementById('edit-email')
let editPassword = document.getElementById('edit-password')

let deleteBtn = document.getElementById('delete-user')


window.addEventListener('DOMContentLoaded', (evt) => {
    /// autorize user
    Adapter.authUser(localStorage.id, localStorage.token)
    .then(userObj => {
        ///changing information form
        userName.innerHTML = userObj.username
        email.innerHTML = userObj.email
        hours.innerHTML = userObj.credit? userObj.credit : '0'
        
        editUsername.placeholder = userObj.username
        editEmail.placeholder = userObj.email
    })


    deleteBtn.addEventListener('click', () => {
        Adapter.deleteUser(localStorage.id)
        .then(data => {
            alert('Your account is deleted!')
        })
        localStorage.clear()
        
    }
    )
    


} /// end of domcontentloaded
)





    
/// edit data fetch back
editForm.addEventListener('submit', (evt) => {
    evt.preventDefault()

    let username = evt.target['username'].value
    let email = evt.target['email'].value

    Adapter.updateUser(localStorage.id, username, email)
    .then(console.log)
}
)



