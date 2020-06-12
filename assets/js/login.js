//Ruby fetch
console.log('login js is working')

const loginForm = document.getElementById('loginForm')

loginForm.addEventListener('submit', (evt) => {
     evt.preventDefault()
     let username = evt.target['name'].value
     let password = evt.target['password'].value

     fetch("http://localhost:3000/login", {
        method: 'POST',
        headers: {
            "content-type": "application/json",
            "accept": "application/json"
        },
        body: JSON.stringify(
            {
                username: username,
                password: password
            }
        )
    })
    .then(r => r.json())

    .then(data => {
        console.log(data)
        if(data.errors){
        /// alert for false input
        alert(data.errors)
        }else{
            //save data to localstorage for accessing in other files
        localStorage.setItem('id', data.id)
        localStorage.setItem('token', data.token)
            // redirect to profile page
        window.location.assign('profile-page.html')
    }

    })
}
)





