import MapChart from "./MapChart";
import { isElementInViewport } from './utils';

const start = () => {
  // advantages не во всю ширину залезают
  document.addEventListener("scroll", () => {
    const blocks = document.querySelectorAll(".custom-block");
    blocks.forEach((block) => {
      if (!isElementInViewport(block)) return;
      if (block.classList.contains("appear")) return;
      if (block.classList.contains("about")) return;
      if (block.classList.contains("start")) return;
      if (block.classList.contains("contacts")) {
        block.classList.add("appear-bottom");
        return;
      }
      if (block.classList.contains("advantages-container")) {
        block.classList.add("appear-bottom");
        return;
      }
      block.classList.add("appear");
    });
  });

  const mapChart = new MapChart(document.querySelector('.map-chart-container'));
}

start();