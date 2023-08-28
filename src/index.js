fetch(" http://localhost:3000/toys")
  .then((response) => response.json())
  .then((data) => renderData(data))

function renderData(toyArray) {
    const toyDiv = document.querySelector("#toy-collection");
    // 1. h2 tag with the toy's name
    // 2 .img tag with the src of the toy's image attribute and the class name "toy-avatar"
    // 3. p tag with how many likes that toy has
    // 4. button tag with a class "like-btn" and an id attribute set to the toy's id number
    toyArray.forEach((toy) => {
      const toyImg = document.createElement("img");
      const toyName = document.createElement("h2");
      const toyLikes = document.createElement("p");
      const toyButton = document.createElement("button");
      const div = document.createElement("div");
      // console.log(toy);
      toyName.textContent = toy.name;
      toyLikes.textContent = toy.likes;
      toyImg.src = toy.image;
      toyButton.textContent = "Like";
      toyButton.className = "like-btn";
      toyImg.className = "toy-avatar";
      div.className = "card"

      toyButton.addEventListener("click", (e) => {
        toyLikes.textContent = parseInt(toyLikes.textContent) + 1;
      })

      div.append(toyName, toyImg, toyLikes, toyButton);
      toyDiv.append(div);
    });
}

const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newToy = {
      name: e.target.name.value,
      image: e.target.image.value,
      likes: 0,
    };
    renderData([newToy]);
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

