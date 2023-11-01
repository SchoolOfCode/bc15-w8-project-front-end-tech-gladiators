let id = localStorage.getItem('id')
let localImg = localStorage.getItem('img')
let userName = ''


async function populateUserData(id){
    console.log("hello" + id)
        let resource = {id: id};
        let JSONdata = JSON.stringify(resource);
        let response = await fetch("http://localhost:7001/users/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSONdata, // body data type must match "Content-Type" header
        });
        let data = await response.json();
    userName = data.data.username
    
    document.getElementById("user-info").innerHTML = `<p id="username">${userName}</p>
    <a href="user-page.html"><div id="profile-pic"></div></a>`
}

document.addEventListener("DOMContentLoaded", populateUserData(id));


// document.getElementById("user-info").innerHTML = `<p id="username">${localName}</p>
// <a href="user-page.html"><div id="profile-pic"></div></a>`

document.getElementById("userImage").innerHTML = `#profile-pic{
    background-image: url('${localImg}');
}`

//add functionality to logout button

function logOut(){
    localStorage.clear()
}
