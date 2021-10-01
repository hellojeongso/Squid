function ScrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior:'smooth'});
}

const arrowUp = document.querySelector('.arrow-up');
arrowUp.addEventListener('click', () => {
  ScrollIntoView('#link_header');
});