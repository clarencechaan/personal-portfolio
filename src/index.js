import _ from "lodash";
import "./styles/index.scss";
import "./styles/hero.scss";
import "./styles/stars.scss";
import "./styles/nav.scss";
import "./styles/about.scss";
import "./styles/projects.scss";
import "./styles/contact.scss";

// display html when styling is loaded
const wrapper = document.querySelector(".wrapper");
wrapper.style.display = "initial";

const stars = document.querySelector(".stars");

// draw stars
for (let i = 0; i < 10; i++) {
  const star = document.createElement("div");
  star.classList.add("star");
  stars.appendChild(star);
}

// 3D effect on hero
const hero = document.querySelector(".hero");
const heroContent = document.querySelector(".hero-content");
if (!isTouchDevice()) {
  hero.addEventListener("mousemove", (e) => {
    const xPos = hero.getBoundingClientRect().left + hero.offsetWidth / 2;
    const yPos =
      hero.getBoundingClientRect().top + hero.offsetHeight / 2 + window.scrollY;
    const xDist = e.pageX - xPos;
    const yDist = e.pageY - yPos;
    const xDiffPercent = xDist / xPos;
    const yDiffPercent = yDist / yPos;
    heroContent.style.transform = `perspective(1000px) rotateX(${
      -yDiffPercent * 10
    }deg) rotateY(${xDiffPercent * 10}deg) translateZ(100px)`;
  });
}

// don't apply 3D effect on hero if touch screen
function isTouchDevice() {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

function highlightTab(id) {
  if (isTouchDevice()) {
    return;
  }
  const tabs = document.querySelectorAll(".nav-bar a");
  for (const tab of tabs) {
    tab.classList.remove("highlighted");
    if (tab.id === "tab-" + id) {
      tab.classList.add("highlighted");
    }
  }
}

const sections = document.querySelectorAll(".section");
for (const sec of sections) {
  sec.onmouseenter = () => {
    highlightTab(sec.id);
  };
}
