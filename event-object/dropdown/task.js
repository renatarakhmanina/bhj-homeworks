const list = document.querySelector('.dropdown__list');
const itemsArray = Array.from(document.querySelectorAll('.dropdown__link'));
const value = document.querySelector('.dropdown__value');

function chooseItem() {
  itemsArray.forEach(item => {
    item.addEventListener('click', function (event) {
      event.preventDefault();
      list.classList.remove('dropdown__list_active');
      value.textContent = item.textContent;
    });
  })
}

value.addEventListener('click', function () {
  list.classList.add('dropdown__list_active');
});
chooseItem();
