// $('#registerForm').on('submit',(e) => {
//     e.preventDefault();
//     let hash = {};
//     let arg = ['name','email','password'];
//     arg.forEach((name) => {
//         let value = $('#registerForm').find(`[name= ${name}]`).val();
//         hash[name] = value;
//     })
//     $('#registerForm').find('.error').each((index,span) => {
//         $(span).text('');
//     })
//     if(hash['name'] === ''){
//         $('#registerForm').find('[name = "name"]').siblings('.error').text('Please enter full name');
//         return
//     }
//     if(hash['email'] === ''){
//         $('#registerForm').find('[name = "email"]').siblings('.error').text('Please enter email');
//         return
//     }
//      if(hash['password'] === ''){
//         $('#registerForm').find('[name = "password"]').siblings('.error').text('Please enter password');
//         return
//     }
//     $.post('/register',hash).then((response) =>{console.log(response)},
//         (request) => {
//         let {errors} = request.responseJSON;
//         if(errors.email  &&  errors.email === 'invalid'){
//            $('#registerForm').find('[name = "email"]').siblings('.error').text('Invalid Email');
//         }
//         })
//     })


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
}
)