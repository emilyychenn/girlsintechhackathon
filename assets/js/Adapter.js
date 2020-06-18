const API = 'https://blooming-wave-77750.herokuapp.com'

///get all users
function getUsers() {
    return fetch(API + '/users').then(r => r.json())
}
///delete user
function deleteUser(id) {
   
    return fetch(API + `/users/${id}`, {
        method: "DELETE"
    }).then(r => r.json())
    
}
////create user fetch patch
function createUser(username, email, password, is_volunteer) {
       
    

    return fetch(API + '/users', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'accept': "application/json"
        },
        body: JSON.stringify({
            username: username,
            email: email,
            password: password,
            is_volunteer: is_volunteer
            
        })
    })

    .then(r => r.json())
    
   
}

///auth user
function authUser(id, token){

return fetch(API + `/users/${id}`,{
    headers: { 
        "Authorization": token
    }
    })
    .then(r => r.json())
    
}

//user update fetch
function updateUser(id, username, email){
    return fetch(API + '/users/' + `${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': "application/json",
            'accept': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            email: email
        })
    })
    .then(r => r.json())
}

///user login fetch
function loginUser(username, password){
    return  fetch(API + '/login', {
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
}
/// creat appointment
function createAppointment(client_id, volunteer_id, date){
  

   
    return fetch(API + '/appointments', {
        
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        
        body: JSON.stringify(
            
            {
                client_id: client_id,
                volunteer_id: volunteer_id,
                apoint_date: date
            }
        )
    })
    .then(r => r.json())
    
}


//export
const Adapter = {
    getUsers: getUsers,
    createUser: createUser,
    deleteUser: deleteUser,
    authUser: authUser,
    updateUser: updateUser,
    loginUser: loginUser,
    createAppointment: createAppointment
    
}
