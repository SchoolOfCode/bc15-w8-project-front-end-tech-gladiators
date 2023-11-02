//API call to get conent to populate front end page
document.addEventListener("DOMContentLoaded", populate);
async function populate() {
  //get data from API
  let response = await fetch("http://localhost:7000/funstuff");
  let data = await response.json();
  data = data.data;
  //populate html root with data from API
  //reverses at the end to show the most recent link first
  document.getElementById("root").innerHTML = data
    .map((resource) => {
      // console.log(resource.imglink);
      let colour = addColour(resource.id);
      return ` <li>
        <a href="${resource.link}" target="_blank">
            <div class="${colour} btn">
                <div class="btn-text-container">
                    <div class="btn-header">${resource.title}</div>
                    <div class="btn-description">${resource.description}</div>
                    <p class="owner-text">Submitted by: <span class="resource-owner">${resource.owner}</span></p>
                </div>
                <div class="img-box">
                    <img src="${resource.imglink}" alt="resource-image">
                </div>
            </div>
        </a>
    </li>`;
    })
    .reverse()
    .join("");
}
//function to pick colour for links above
function addColour(id) {
  const colours = ["yellow", "blue", "green", "purple"];
  if (id % 4 == 0) {
    return colours[3];
  }
  if (id % 3 == 0) {
    return colours[2];
  }
  if (id % 2 == 0) {
    return colours[1];
  }
  return colours[0];
}
//////////////////////////////////////////////////////////////////////////////////

//api call to get username for adding to new resource
let userid = localStorage.getItem("id");
let userNameAdd = null;

document.addEventListener("DOMContentLoaded", getUserId(userid));

async function getUserId(id) {
  let resource = { id: id };
  let resourceJSON = JSON.stringify(resource);
  let response = await fetch("http://localhost:7000/users/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: resourceJSON, // body data type must match "Content-Type" header
  });
  let data = await response.json();
  userNameAdd = data.data.username;
}

//API call to submit a new resource
//function to submit new resources
//default behaviour for submit is to refresh page - so resources automatically update.
form.addEventListener("submit", async (e) => {
  //get values from Form data and save in js object
  let localUsername = localStorage.getItem("username");
  let resource = {
    title: e.target[0].value,
    link: e.target[1].value,
    imglink: e.target[2].value,
    description: e.target[3].value,
    owner: localUsername,
  };
  //turn into JSON object
  let resourceJSON = JSON.stringify(resource);
  //post new resource to the database
  let response = await fetch("http://localhost:7000/funstuff", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: resourceJSON, // body data type must match "Content-Type" header
  });
  //get data from the API and parse to JavaScript
  // let data = await response.json()
  // console.log(data.data)
});
