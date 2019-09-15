const slideImages = document.querySelector(".slide");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let x = 0;

let images = [
  "/projects/cake-bakery/images/1.jpg",
  "/projects/cake-bakery/images/2.jpg",
  "/projects/cake-bakery/images/3.jpg",
  "/projects/cake-bakery/images/4.jpg",
  "/projects/cake-bakery/images/5.jpg",
];

nextBtn.addEventListener(
  "click",
  (nextImg = () => {
    if (x < images.length) {
      x = x + 1;
    } else {
      x = 1;
    }
    slideImages.innerHTML = "<img src=" + images[x - 1] + ">";
  }),
);

prevBtn.addEventListener("click", () => {
  if (x < images.length + 1 && x > 1) {
    x = x - 1;
  } else {
    x = images.length;
  }
  slideImages.innerHTML = "<img src=" + images[x - 1] + ">";
});

setInterval(nextImg, 2000);
