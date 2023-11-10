const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab__content');
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    tabs.forEach(item => item.classList.remove('tab_active'));
    tabs[index].classList.add('tab_active');
    tabContents.forEach(item => item.classList.remove('tab__content_active'));
    tabContents[index].classList.add('tab__content_active');
  });
});