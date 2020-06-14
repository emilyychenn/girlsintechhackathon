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

//export
const Adapter = {
    getUsers: getUsers,
    createUser: createUser,
    deleteUser: deleteUser,
    authUser: authUser,
    updateUser: updateUser
    
    
}
