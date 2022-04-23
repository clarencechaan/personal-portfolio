import _ from "lodash";
import "./styles/index.scss";
import "./styles/hero.scss";
import "./styles/stars.scss";
import "./styles/nav.scss";

const stars = document.querySelector(".stars");

// draw stars
for (let i = 0; i < 50; i++) {
  const star = document.createElement("div");
  star.classList.add("star");
  stars.appendChild(star);
}
