
//////////getting user information from the back end using user ID
let userid = localStorage.getItem('id')

document.addEventListener("DOMContentLoaded", populateUserData(userid));

async function populateUserData(id){
console.log("hello" + id)
    let resource = {id: id};
    let JSONdata = JSON.stringify(resource);
    let response = await fetch("http://localhost:7000/users/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata, // body data type must match "Content-Type" header
    });
    let data = await response.json();
    console.log(data.data.username);
    document.getElementById("user-basic-info").innerHTML = `
    <h1 id="user-fullname">${data.data.name}</h1>
    <p class="user-handle">${data.data.username}</p>
    <a id="user-email" href="mailto:dannykryan@gmail.com">${data.data.email}</a>
    `

}

///////adding styling to user image

document.getElementById("userImage").innerHTML = `#profile-pic{
    background-image: url('${localImg}');}
    #profile-pic-large{
        background-image: url('${localImg}');
    }
`

