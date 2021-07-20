const images = document.querySelectorAll(".number");
const centerImg = document.querySelector(".center-image");

const menu = document.querySelector(".menu");

bgimages = [
  "url(../image/10x19/1.jpg)",
  "url(../image/10x19/2.jpg)",
  "url(../image/10x19/3.jpg)",
  "url(../image/10x19/4.jpg)",
  "url(../image/10x19/5.jpg)",
  "url(../image/10x19/6.jpg)",
  "url(../image/10x19/7.jpg)",
  "url(../image/10x19/8.jpg)",
  "url(../image/10x19/9.jpg)",
  "url(../image/10x19/10.jpg)",
];

const handleImage = (images) => {
  const { style } = centerImg;
  style.backgroundImage = bgimages[images];
};

const handleClick = (event) => {
  event.target.classList.toggle("menuExtend");
};

images.forEach((image, images) => {
  image.addEventListener("mouseover", (e) => {
    handleImage(images);
  });
});

menu.addEventListener("click", handleClick);
