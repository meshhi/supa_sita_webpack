export const isElementInViewport = (el) => {
    let rect = el.getBoundingClientRect();
    const isVisible = rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight *1.2  || document.documentElement.clientHeight) && /* or $(window).height() */
    rect.right <= (window.innerWidth *1.2 || document.documentElement.clientWidth); /* or $(window).width() */
    return isVisible;
  }