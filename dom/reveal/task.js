const elements = document.querySelectorAll('.reveal');
document.addEventListener('scroll', () => {
  elements.forEach(element => {
    if (element.getBoundingClientRect().top > 0 && element.getBoundingClientRect().bottom < window.innerHeight) {
      element.classList.add('reveal_active');
    } else {
      element.classList.remove('reveal_active');
    }
  })
});