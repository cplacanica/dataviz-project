const wrapper = document.querySelector('.wrapper');
const blackPage = document.querySelector('.black');
const whitePage = document.querySelector('.white');
const smallText = document.querySelector('.small-text');

window.addEventListener('wheel', (e) => {
  if (e.deltaY > 0) {
    wrapper.style.left = '-100%';
  } else {
    wrapper.style.left = '0';
  }

  // Check if the user has scrolled to the second page
  if (wrapper.getBoundingClientRect().left === -window.innerWidth) {
    // Show the small text
    smallText.style.display = 'block';
  } else {
    // Hide the small text
    smallText.style.display = 'none';
  }
});

blackPage.addEventListener('click', () => {
  wrapper.style.left = '-100%';
});

whitePage.addEventListener('click', () => {
  wrapper.style.left = '0';
});