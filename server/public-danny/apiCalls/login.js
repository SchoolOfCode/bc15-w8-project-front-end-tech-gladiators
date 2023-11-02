//login attempt
//export const userName = ''
const loginForm = document.getElementById("logInData");
const continueBtn = document.querySelector(".popUp");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  let resource = { username: e.target[0].value, password: e.target[1].value };
  //turn into JSON object
  let JSONdata = JSON.stringify(resource);
  //console.log(resource)
  //post new resource to the database
  let response = await fetch("http://localhost:7000/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSONdata, // body data type must match "Content-Type" header
  });
  let loginData = await response.json();
  console.log(loginData.status);
  if (loginData.status !== "success") {
    console.log("There has been an error!");
    document.getElementById("notFound").classList.toggle("notFound");
  } else {
    localStorage.setItem("username", `${loginData.data.username}`);
    localStorage.setItem("id", `${loginData.data.id}`);
    localStorage.setItem("img", `${loginData.data.imglink}`);
    continueBtn.innerHTML = `
        <div class="continue">
        <h2>Welcome back, ${loginData.data.name.split(" ")[0]}!</h2>
        <button type="button" onclick="window.location.href = 'index.html';" >Continue</button>
        </div>
        `;
    userName = data.data.name;
  }
});

//pop up logic
const closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", closePop);
function closePop() {
  document.getElementById("notFound").classList.toggle("notFound");
}

//register button to bring up new form
const registerForm = document.getElementById("newUser");
const loginBody = document.querySelector(".loginMain");

function register() {
  registerForm.classList.toggle("newUserHide");
  loginBody.classList.toggle("loginOpacity");
}

//API request to add new user

registerForm.addEventListener("submit", async (e) => {
  // e.preventDefault()
  let resource = {
    name: e.target[0].value,
    email: e.target[1].value,
    username: e.target[2].value,
    password: e.target[3].value,
    imglink: e.target[4].value,
  };
  //turn into JSON object
  console.log(resource);
  let JSONdata = JSON.stringify(resource);

  let response = await fetch("http://localhost:7000/users/newuser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSONdata, // body data type must match "Content-Type" header
  });

  let data = await response.json();
  console.log(data);
});
