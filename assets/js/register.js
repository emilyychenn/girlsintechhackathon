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
    
   Adapter.createUser(username, email, password, isVolunteer)
   .then(data => {
       if(data.errors){
           alert(data.errors)
       }else{
          
          Adapter.authUser(data.user_id, data.token)
          .then(userObj => {
              new Profile(userObj)
              window.location.assign('profile-page.html')
          })
       }
   })


}
)



