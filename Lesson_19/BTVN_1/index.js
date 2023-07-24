const users = [
  {
    name: "User 1",
    quote: "This is the first user's quote.",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    color: "#FF5733",
  },
  {
    name: "User 2",
    quote: "This is the second user's quote.",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    color: "#33FF57",
  },
  {
    name: "User 3",
    quote: "This is the second user's quote.",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    color: "#33FF57",
  },
  {
    name: "User 4",
    quote: "This is the second user's quote.",
    image: "https://randomuser.me/api/portraits/women/76.jpg",
    color: "#33FF57",
  },
  {
    name: "User 5",
    quote: "This is the second user's quote.",
    image: "https://randomuser.me/api/portraits/men/17.jpg",
    color: "#33FF57",
  },
];

const testimonialsContainer = document.querySelector(".testimonials-container");
const usersList = testimonialsContainer.querySelectorAll(".author");

function displayUserInfo(index) {
  const quote = document.querySelector(".text");
  const name = document.querySelector(".name");
  const selectedUser = document.querySelector(".author.selected img");

  usersList.forEach((user) => user.classList.remove("selected"));

  usersList[index].classList.add("selected");

  quote.textContent = users[index].quote;
  name.textContent = users[index].name;
  testimonialsContainer.style.backgroundColor = users[index].color;
  selectedUser.src = users[index].image;
}

usersList.forEach((user, index) => {
  user.addEventListener("click", () => displayUserInfo(index));
});

displayUserInfo(0);
