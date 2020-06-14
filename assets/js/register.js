/// Ruby fetch
const registerForm = document.getElementById('registerForm')



registerForm.addEventListener('submit', (evt) => {
    evt.preventDefault()
    console.log(evt.target)
    let username = evt.target['name'].value
    let email = evt.target['email'].value
    let password = evt.target['password'].value
    let isVolunteer = false
    if(evt.target['inlineRadioOptions'].value === 'option1'){
        isVolunteer = true
    }
    
    fetch('https://blooming-wave-77750.herokuapp.com/users', {
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

    .then(data => {
       console.log('data', data)
        if(data.errors){
        /// alert for false input

        alert(data.errors)
        }else{
        //save data to localstorage for accessing in other files

        localStorage.token = data.token
        localStorage.id = data.user_id
        // redirect to profile 
        
    }
    })
    // if(localStorage.token !== ''){
    //     window.location.assign('profile-page.html')}
}
)



