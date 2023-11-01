
//const baseUrl = 'https://olivia-study-buddy.onrender.com'
//////////getting user information from the back end using user ID
let userid = localStorage.getItem('id')

document.addEventListener("DOMContentLoaded", populateUserData(userid));

async function populateUserData(id){
console.log("hello" + id)
    let resource = {id: id};
    let JSONdata = JSON.stringify(resource);
    let response = await fetch(`${baseUrl}/users/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata, // body data type must match "Content-Type" header
    });
    let data = await response.json();
    document.getElementById("user-basic-info").innerHTML = `
    <h1 id="user-fullname">${data.data.name}</h1>
    <p class="user-handle">${data.data.username}</p>
    <a id="user-email" href="mailto:dannykryan@gmail.com">${data.data.email}</a>
    `
    frontEndSlider.value = data.data.frontrating
    backEndSlider.value = data.data.backrating
    uxUiSlider.value = data.data.uirating
    addStarsBackEnd()
    addStarsFrontEnd()
    addStarsUi()

}

///////adding styling to user image

document.getElementById("userImage").innerHTML = `#profile-pic{
    background-image: url('${localImg}');}
    #profile-pic-large{
        background-image: url('${localImg}');
    }
`

/////////////////Setting stars for confidence in different areas///////////////////////////////////////////////////
//selecting different sliders
const frontEndSlider = document.getElementById("setFrontEnd")
const backEndSlider = document.getElementById("setBackEnd")
const uxUiSlider = document.getElementById("setUxUi")

//front end
frontEndSlider.addEventListener('change', addStarsFrontEnd)

async function addStarsFrontEnd(){
  let starArray = '★★★★★'
  let stars = starArray.substring(0, frontEndSlider.value)
  let emptyStars = starArray.substring(frontEndSlider.value, 5)
    document.getElementById("front-end-rating").innerText = stars

    document.getElementById("emptyStarFront").innerText = emptyStars

  await updateRatings('front', frontEndSlider.value)
}

//back end
backEndSlider.addEventListener('change', addStarsBackEnd)

async function addStarsBackEnd(){
  let starArray = '★★★★★'
  let stars = starArray.substring(0, backEndSlider.value)
  let emptyStars = starArray.substring(backEndSlider.value, 5)
    document.getElementById("back-end-rating").innerText = stars

    document.getElementById("emptyStarBack").innerText = emptyStars

    await updateRatings('back', backEndSlider.value)
}

//ux ui
uxUiSlider.addEventListener('change', addStarsUi)

async function addStarsUi(){
  let starArray = '★★★★★'
  let stars = starArray.substring(0, uxUiSlider.value)
  let emptyStars = starArray.substring(uxUiSlider.value, 5)
    document.getElementById("uiux-rating").innerText = stars

    document.getElementById("emptyStarUi").innerText = emptyStars

    await updateRatings('ui', uxUiSlider.value)
}

  //API call to update database with new rating for required route
  async function updateRatings(route, rating){
  let ratingUpdate = {id: userid, rating: rating};
  let JSONdata = JSON.stringify(ratingUpdate)
  await fetch(`${baseUrl}/users/${route}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSONdata, // body data type must match "Content-Type" header
  })}

  