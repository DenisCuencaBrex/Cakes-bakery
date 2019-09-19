const openBtn = document.querySelector("#videoBtn");
const closeBtn = document.querySelector("#closeBtn");

const modal = document.querySelector(".modal");

openBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", event => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
