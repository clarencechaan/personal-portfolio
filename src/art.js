import "./styles/index.scss";
import "./styles/stars.scss";
import "./styles/art.scss";
import "./styles/nav.scss";

const stars = document.querySelector(".stars");

// draw stars
for (let i = 0; i < 10; i++) {
  const star = document.createElement("div");
  star.classList.add("star");
  stars.appendChild(star);
}

const popupOverlay = document.querySelector(".popup-overlay");
const popupImg = document.querySelector(".popup-img");
const imgs = document.querySelectorAll(".drawings img");
for (const img of imgs) {
  img.addEventListener("click", () => {
    popupOverlay.classList.add("visible");
    popupImg.src = img.src.slice(0, -9) + ".JPG";
  });
}

popupOverlay.onclick = () => {
  popupOverlay.classList.remove("visible");
};
