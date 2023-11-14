const ads = document.querySelectorAll('.rotator__case');
function changeAds() {
  let randomIndex = Math.floor(Math.random() * ads.length);
  for (i = 0; i < ads.length; i++) {
    ads[i].classList.remove('rotator__case_active');
  }
  ads[randomIndex].classList.add('rotator__case_active');
  ads[randomIndex].style.color = ads[randomIndex].dataset.color;
  ads[randomIndex].style.transitionDuration = ads[randomIndex].dataset.speed + 'ms';
}
setInterval(changeAds, 1000);