import _ from "lodash";
import "./styles/index.scss";
import "./styles/hero.scss";
import "./styles/stars.scss";
import "./styles/nav.scss";
import "./styles/about.scss";
import "./styles/projects.scss";
import "./styles/contact.scss";

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
    console.log(xDiffPercent, yDiffPercent);
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

// slide in on scroll
window.addEventListener("scroll", () => {
  techsSlide();
  bioSlide();
  projectsSlide();
});

const technologies = document.querySelector(".technologies");
const techs = document.querySelectorAll(".tech");

function techsSlide() {
  const technologiesCenter =
    technologies.getBoundingClientRect().top + technologies.offsetHeight / 2;
  const techDiffPercent =
    (window.innerHeight / 2 - technologiesCenter) / technologies.offsetHeight;
  if (Math.abs(techDiffPercent) > 1.5) {
    return;
  }
  for (let i = 0; i < techs.length; i++) {
    if (techDiffPercent >= 0.5) {
      techs[i].style.transform = `translateX(${
        (techDiffPercent - 0.5) * 10 * (i + 10)
      }%)`;
    } else if (techDiffPercent <= -0.5) {
      techs[i].style.transform = `translateX(${
        (techDiffPercent + 0.5) * 10 * (i + 10)
      }%)`;
    } else {
      techs[i].style.transform = "translateX(0)";
    }
  }
}

const bio = document.querySelector(".bio");
const codeImg = document.querySelector(".code-img");
const bioDesc = document.querySelector(".bio-desc");

function bioSlide() {
  const bioCenter = bio.getBoundingClientRect().top + bio.offsetHeight / 2;
  const bioDiffPercent =
    (window.innerHeight / 2 - bioCenter) / bio.offsetHeight;
  if (Math.abs(bioDiffPercent) > 1.5) {
    return;
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
}

// slide in on scroll for project section
const projects = document.querySelectorAll(".project");
const projectDescs = document.querySelectorAll(".project-desc");
const projectTitles = document.querySelectorAll(".project-title");
const projectDescTexts = document.querySelectorAll(".project-desc-text");
const projectBtns = document.querySelectorAll(".main_div");
const projectVids = document.querySelectorAll(".project > .vid-container");

function projectsSlide() {
  for (let i = 0; i < projects.length; i++) {
    const projectCenter =
      projects[i].getBoundingClientRect().top + projects[i].offsetHeight / 2;
    const projDiffPercent =
      (window.innerHeight / 2 - projectCenter) / projects[i].offsetHeight;
    // if (Math.abs(projDiffPercent) > 1.5) {
    //   return;
    // }
    let direction = 1;
    if (i % 2 !== 0) {
      direction = -1;
    }
    if (projDiffPercent >= 0.5) {
      projectDescs[i].style.transform = `translateX(${
        -(projDiffPercent - 0.5) * 75 * direction
      }%)`;
      projectTitles[i].style.transform = `translateX(${
        -(projDiffPercent - 0.5) * 25 * direction
      }%)`;
      projectDescTexts[i].style.transform = `translateX(${
        -(projDiffPercent - 0.5) * 50 * direction
      }%)`;
      projectBtns[2 * i].style.transform = `translateX(${
        -(projDiffPercent - 0.5) * 75 * direction
      }%)`;
      projectBtns[2 * i + 1].style.transform = `translateX(${
        -(projDiffPercent - 0.5) * 100 * direction
      }%)`;
      projectVids[i].style.transform = `translateX(${
        -(projDiffPercent - 0.5) * 50 * direction
      }%)`;
    } else if (projDiffPercent <= -0.5) {
      projectDescs[i].style.transform = `translateX(${
        -(projDiffPercent + 0.5) * 75 * direction
      }%)`;
      projectTitles[i].style.transform = `translateX(${
        -(projDiffPercent + 0.5) * 25 * direction
      }%)`;
      projectDescTexts[i].style.transform = `translateX(${
        -(projDiffPercent + 0.5) * 50 * direction
      }%)`;
      projectBtns[2 * i].style.transform = `translateX(${
        -(projDiffPercent + 0.5) * 75 * direction
      }%)`;
      projectBtns[2 * i + 1].style.transform = `translateX(${
        -(projDiffPercent + 0.5) * 100 * direction
      }%)`;
      projectVids[i].style.transform = `translateX(${
        -(projDiffPercent + 0.5) * 50 * direction
      }%)`;
    } else {
      projectDescs[i].style.transform = "translateX(0)";
      projectTitles[i].style.transform = "translateX(0)";
      projectDescTexts[i].style.transform = "translateX(0)";
      projectBtns[2 * i].style.transform = "translateX(0)";
      projectBtns[2 * i + 1].style.transform = "translateX(0)";
      projectVids[i].style.transform = "translateX(0)";
    }
  }
}
