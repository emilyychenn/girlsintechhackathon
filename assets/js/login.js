//Ruby fetch
console.log('login js is working')
// const Swal = require('sweetalert2')
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
        //     Swal.fire({
        //         icon: 'error',
        //         title: 'Oops...',
        //         text: 'Something went wrong!'
                
        //       })

        alert(data.errors)
        }else{
        localStorage.setItem('id', data.id)
        localStorage.setItem('token', data.token)
        window.location.assign('profile-page.html')
    }

    })
}
)


    // redirect to profile page
})

