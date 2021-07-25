const mouseCursor = document.querySelector(".cursor");
const links = document.querySelectorAll("a");

const cursor = (event) => {
  mouseCursor.style.top = event.pageY - scrollY + "px";
  mouseCursor.style.left = event.pageX + "px";
};

window.addEventListener("mousemove", cursor);
window.addEventListener("scroll", cursor);
links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
  });
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
  });
});
