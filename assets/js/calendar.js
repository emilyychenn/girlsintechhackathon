//find the div
const calContainerDiv = document.getElementById('calendar-container')
// console.log(calContainerDiv)
//create iframe
let calIframe = document.createElement("iframe")
//iframe attribute
calIframe.style.border = 0
calIframe.width= "550"
calIframe.height = "600"
calIframe.frameBorder = 0
calIframe.scrolling = "no"

// console.log(calIframe)
/// fetch user email in the future
let userEmail = "annieyt8880%40gmail.com"
let iframeSrc = 'https://calendar.google.com/calendar/embed?src='+`${userEmail}`+'&ctz=America%2FVancouver'
calIframe.src=iframeSrc
/// add iframe to div
calContainerDiv.append(calIframe)
