import _ from "lodash";
import "./styles/index.scss";
import "./styles/hero.scss";
import "./styles/stars.scss";
import "./styles/nav.scss";
import "./styles/about.scss";

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
hero.addEventListener("mousemove", (e) => {
  const xPos = hero.getBoundingClientRect().left + hero.offsetWidth / 2;
  const yPos =
    hero.getBoundingClientRect().top + hero.offsetHeight / 2 + window.scrollY;
  const xDist = e.pageX - xPos;
  const yDist = e.pageY - yPos;
  const xDiffPercent = xDist / xPos;
  const yDiffPercent = yDist / yPos;
  console.log(xDiffPercent, yDiffPercent);
  heroContent.style.transform = `perspective(1000px) rotateX(${
    -yDiffPercent * 10
  }deg) rotateY(${xDiffPercent * 10}deg) translateZ(100px)`;
});

const technologies = document.querySelector(".technologies");
const techs = document.querySelectorAll(".tech");
const bio = document.querySelector(".bio");
const codeImg = document.querySelector(".code-img");
const bioDesc = document.querySelector(".bio-desc");
window.addEventListener("scroll", () => {
  const technologiesCenter =
    technologies.getBoundingClientRect().top + technologies.offsetHeight / 2;
  const bioCenter = bio.getBoundingClientRect().top + bio.offsetHeight / 2;
  const techDiffPercent =
    (window.innerHeight / 2 - technologiesCenter) / technologies.offsetHeight;
  const bioDiffPercent =
    (window.innerHeight / 2 - bioCenter) / bio.offsetHeight;

  console.log(techDiffPercent);
  for (let i = 0; i < techs.length; i++) {
    if (techDiffPercent >= 0.5) {
      techs[i].style.transform = `translateX(${
        (techDiffPercent - 0.5) * 25 * (i + 10)
      }%)`;
    } else if (techDiffPercent <= -0.5) {
      techs[i].style.transform = `translateX(${
        (techDiffPercent + 0.5) * 25 * (i + 10)
      }%)`;
    } else {
      techs[i].style.transform = "translateX(0)";
    }
  }

  if (bioDiffPercent >= 0.5) {
    codeImg.style.transform = `translateX(${(bioDiffPercent - 0.5) * 50}%)`;
    bioDesc.style.transform = `translateX(${(bioDiffPercent - 0.5) * 30}%)`;
  } else if (bioDiffPercent <= -0.5) {
    codeImg.style.transform = `translateX(${(bioDiffPercent + 0.5) * 50}%)`;
    bioDesc.style.transform = `translateX(${(bioDiffPercent + 0.5) * 30}%)`;
  } else {
    codeImg.style.transform = "translateX(0)";
    bioDesc.style.transform = "translateX(0)";
  }
});
