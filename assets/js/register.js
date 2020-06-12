/// Ruby fetch
const registerForm = document.getElementById('registerForm')

registerForm.addEventListener('submit', (evt) => {
    evt.preventDefault()
    let username = evt.target['name'].value
    let email = evt.target['email'].value
    let password = evt.target['password'].value
    let isVolunteer = false
    if(evt.target['inlineRadioOptions'].value === 'option1'){
        isVolunteer = true
    }
    
    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify(
            {
                username: username,
                email: email,
                password: password,
                is_volunteer: isVolunteer
            }
        )
    })
    .then(r => r.json())
    .then(console.log)
})