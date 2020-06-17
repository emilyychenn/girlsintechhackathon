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
let userEmail = 'g.aierken@gmail.com'
let iframeSrc = 'https://calendar.google.com/calendar/embed?src='+`${userEmail}`+'&ctz=America%2FVancouver'
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


appointmentSubmit.addEventListener('submit', (evt) => {
    evt.preventDefault()
       let pickedDate = evt.target['date'].value
       

       
    
}
)