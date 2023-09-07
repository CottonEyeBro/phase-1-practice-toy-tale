// Second Walkthrough
// Deliverable #1 [DONE]
  // 1. Fetch toy card info from JSON file using a fetch request [DONE]
  // 2. Card info should be displayed as div elements with the class of ".card" [DONE]
  // 3. Each card should render to the "#toy-collection" div [DONE]
  // 4. Each card div should include the following child elements [DONE]
    // h2 = toy's name , img with the class name ".toy-avatar" and a src = toy's image attribute , p = number of likes , button = class of ".like-btn" and id attribute set to to toy's id number [DONE]


// Deliverable #2 [DONE]
  // 1. Set up a form "submit" event listener to be able to add a new toy to the browser [DONE]

// Deliverable #3
  // Create an event listener that gives users the ability to click a button to "like" a toy. When the button is clicked, the number of likes should be updated in the database and the updated information should be rendered to the DOM
    // 1. Create another event listener ("click") on our ".like-btn" button
    // 2. When clicked, the number of likes should be increased by 1 (parseInt()++) after starting from the default number (or zero for a newly added toy)

const baseURL = "http://localhost:3000/toys"

fetch("http://localhost:3000/toys")
  .then((response) => response.json())
  .then((data) => renderToyCards(data))

  function renderToyCards(toys) {
    // console.log(toys)
    const toyCollectionContainer = document.querySelector("#toy-collection")
    // console.log(toyCollectionContainer)
    toys.forEach((toy) => {
      // console.log(toy)

      const toyCardDiv = document.createElement("div")
      const toyName = document.createElement("h2")
      const toyImg = document.createElement("img")
      const toyLikes = document.createElement("p")
      const toyButton = document.createElement("button")

      toyCardDiv.className = "card"
      toyName.textContent = toy.name
      toyImg.className = "toy-avatar"
      toyImg.src = toy.image
      toyLikes.textContent = toy.likes + " Likes"
      toyButton.className = "like-btn"
      toyButton.id = toy.id
      toyButton.textContent = "Like ❤️"

      toyButton.addEventListener("click", (e) => {
        toyLikes.textContent = parseInt(toyLikes.textContent) + 1 + " Likes"
      })

      toyCollectionContainer.append(toyCardDiv)
      toyCardDiv.append(toyName, toyImg, toyLikes, toyButton)
    })
  }

const newToyForm = document.querySelector(".add-toy-form")
newToyForm.addEventListener("submit", (e) => {
  e.preventDefault()
  const newToy = {
    "id": e.target.id.value,
    "name": e.target.name.value,
    "image": e.target.image.value,
    "likes": 0
  }
  renderToyCards([newToy])
})

let addToy = false;

const addBtn = document.querySelector("#new-toy-btn");
const toyFormContainer = document.querySelector(".container");
addBtn.addEventListener("click", () => {
  // hide & seek with the form
  addToy = !addToy;
  if (addToy) {
    toyFormContainer.style.display = "block";
  } else {
    toyFormContainer.style.display = "none";
  }
});







































// First Walkthrough
// fetch(" http://localhost:3000/toys")
//   .then((response) => response.json())
//   .then((data) => renderToyCards(data))
//   // We can use console.log(data) prior to writing the renderToyCards() function to confirm the type of elements we are working with, in this case, an array of toys

// function renderToyCards(toyArray) {
//     // console.log(toyArray)
//     const toy = document.querySelector("#toy-collection");

//     // 1. h2 tag with the toy's name
//     // 2 .img tag with the src of the toy's image attribute and the class name "toy-avatar"
//     // 3. p tag with how many likes that toy has
//     // 4. button tag with a class "like-btn" and an id attribute set to the toy's id number

//     toyArray.forEach((toy) => {
//       const toyImg = document.createElement("img")
//       const toyName = document.createElement("h2")
//       const toyLikes = document.createElement("p")
//       const toyButton = document.createElement("button")
//       const div = document.createElement("div")
//       // console.log(toy);

//       toyName.textContent = toy.name
//       toyLikes.textContent = toy.likes
//       toyImg.src = toy.image
//       toyButton.textContent = "Like"
//       toyButton.className = "like-btn"
//       toyImg.className = "toy-avatar"
//       div.className = "card"

//       // Like function
//       toyButton.addEventListener("click", (e) => {
//         toyLikes.textContent = parseInt(toyLikes.textContent) + 1
//       })

//       div.append(toyName, toyImg, toyLikes, toyButton)
//       toy.append(div)
//     })
//   }

//   // New toy form
// const form = document.querySelector("form")
//   form.addEventListener("submit", (e) => {
//     e.preventDefault()
//     // console.log(e) 
//     //console.log(e.target.__________.value)
//     const newToy = {
//       id: e.target.id.value,
//       name: e.target.name.value,
//       image: e.target.image.value,
//       likes: 0,
//     }

//     renderToyCards([newToy])
//   })

// let addToy = false;

// const addBtn = document.querySelector("#new-toy-btn");
// const toyFormContainer = document.querySelector(".container");
// addBtn.addEventListener("click", () => {
//   // hide & seek with the form
//   addToy = !addToy;
//   if (addToy) {
//     toyFormContainer.style.display = "block";
//   } else {
//     toyFormContainer.style.display = "none";
//   }
// });

