$('#registerForm').on('submit',(e) => {
    e.preventDefault();
    let hash = {};
    let arg = ['name','email','password'];
    arg.forEach((name) => {
        let value = $('#registerForm').find(`[name= ${name}]`).val();
        hash[name] = value;
    })
    $('#registerForm').find('.error').each((index,span) => {
        $(span).text('');
    })
    if(hash['name'] === ''){
        $('#registerForm').find('[name = "name"]').siblings('.error').text('Please enter full name');
        return
    }
    if(hash['email'] === ''){
        $('#registerForm').find('[name = "email"]').siblings('.error').text('Please enter email');
        return
    }
     if(hash['password'] === ''){
        $('#registerForm').find('[name = "password"]').siblings('.error').text('Please enter password');
        return
    }
    $.post('/register',hash).then((response) =>{console.log(response)},
        (request) => {
        let {errors} = request.responseJSON;
        if(errors.email  &&  errors.email === 'invalid'){
           $('#registerForm').find('[name = "email"]').siblings('.error').text('Invalid Email');
        }
        })
    })