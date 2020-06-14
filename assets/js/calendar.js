//find the div
const calContainerDiv = document.getElementById('calendar-container')
const volunteerDropdownDiv = document.getElementById("volunteer-dropdown-menu")
// console.log(calContainerDiv)
// console.log(volunteerDropdownDiv)
//create iframe

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
        let dropdownItem = document.createElement('a')
            dropdownItem.className = "dropdown-item" 
            dropdownItem.href = '#'
            dropdownItem.innerHTML = volunteer.username
       
            volunteerDropdownDiv.append(dropdownItem)
       ///click appointment fetch post
            dropdownItem.addEventListener('click', () => {
                console.log(`${volunteer.username} is clicked`)
                 //client_id, volunteer_id, appointdate
            }
            )
    }
    )
  
    
})