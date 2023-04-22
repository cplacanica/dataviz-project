const wrapper = document.querySelector('.wrapper');
const blackPage = document.querySelector('.black');
const whitePage = document.querySelector('.white');

window.addEventListener('wheel', (e) => {
  if (e.deltaY > 0) {
    wrapper.style.left = '-100%';
  } else {
    wrapper.style.left = '0';
  }
});

blackPage.addEventListener('click', () => {
  wrapper.style.left = '-100%';
});

whitePage.addEventListener('click', () => {
  wrapper.style.left = '0';
});
