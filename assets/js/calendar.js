//find the div
const calContainerDiv = document.getElementById('calendar-container')
const volunteerDropdownSelect = document.getElementById("volunteer-dropdown-menu")
const appointmentSubmit = document.getElementById('appointment-submit')
// console.log(calContainerDiv)

// console.log(appointmentSubmit)


////create iframe
console.log(localStorage)
let calIframe = document.createElement("iframe")



//iframe attribute
calIframe.style.border = 0
calIframe.width= "550"
calIframe.height = "600"
calIframe.frameBorder = 0
calIframe.scrolling = "no"

// console.log(calIframe)
/// fetch user email in the future
let userEmail = 'emilylynnchen@gmail.com'
// let iframeSrc = 'https://calendar.google.com/calendar/embed?src='+`${userEmail}`+'&ctz=America%2FVancouver'
let iframeSrc = "https://calendar.google.com/calendar/embed?src=7n1b46cb0v4nsok2foghjj67hs%40group.calendar.google.com&ctz=America%2FToronto"
calIframe.src=iframeSrc
/// add iframe to div
calContainerDiv.append(calIframe)

///get all volunteers
Adapter.getUsers()
.then(data => {
    
    let volunteers = data.filter((user) => {
        return user.is_volunteer
    }
    )
    // console.table(volunteers)
  
    // console.log(dropdownItem)
      
    /// add dropdown menu
   volunteers.map((volunteer) => {
        let dropdownItem = document.createElement('option')
           
            dropdownItem.value = volunteer.username
            dropdownItem.innerHTML = volunteer.username
            dropdownItem.dataset.id = volunteer.id

            volunteerDropdownSelect.append(dropdownItem)
      
           
    }
    )
  
    
})

///appointment fetch create
appointmentSubmit.addEventListener('submit', (evt) => {
    evt.preventDefault()
       let pickedDate = evt.target['date'].value
       let selectedUser = evt.target['selected-user'].value
       let client_id = localStorage.id
    //    console.log(pickedDate, selectedUser, client_id)
       
     //// find volunteer id
       let volunteer_id = ''
       for(let i = 0; i < evt.target['selected-user'].children.length; i++){
           if(evt.target['selected-user'].children[i].text === selectedUser){
               volunteer_id = evt.target['selected-user'].children[i].dataset.id
           }
       }

    //    console.log('client', client_id, 'volunteer', volunteer_id, 'date', pickedDate)
    ///post fetch
       Adapter.createAppointment(client_id, volunteer_id, pickedDate)
       .then(data => {

        if(data.errors){
            alert(data.errors)
        }else{
           alert(`Your appointment with ${selectedUser} is scheduled.`)
        }
       })
    
}
)