// TODO: write code here
const isElementInViewport = (el) => {
  let rect = el.getBoundingClientRect();
  const isVisible = rect.top >= 0 &&
  rect.left >= 0 &&
  rect.bottom <= (window.innerHeight *1.2  || document.documentElement.clientHeight) && /* or $(window).height() */
  rect.right <= (window.innerWidth *1.2 || document.documentElement.clientWidth); /* or $(window).width() */
  
  console.log(el.classList);
  console.log(isVisible)
  return isVisible;
}

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
    block.classList.add("appear");
  });
});
