let localName = localStorage.getItem('name')
let localImg = localStorage.getItem('img')



document.getElementById("user-info").innerHTML = `<p id="username">${localName}</p>
<a href="user-page.html"><div id="profile-pic"></div></a>`

document.getElementById("userImage").innerHTML = `#profile-pic{
    background-image: url('${localImg}');
}`