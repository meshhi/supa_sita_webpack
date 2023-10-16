// TODO: write code here

// comment this to pass build
const isHidden = (el) => {
  return (el.offsetParent === null)
}

document.addEventListener('scroll', (e) => {
  const blocks = document.querySelectorAll('.custom-block');
  blocks.forEach(block => {
      if(isHidden(block)) return;
      if(block.classList.contains('appear')) return;
      if(block.classList.contains('about')) return;
      if(block.classList.contains('start')) return;
      if(block.classList.contains('contacts')) {
          block.classList.add('appear-bottom');
          return;
      };
      block.classList.add('appear');
  })
})