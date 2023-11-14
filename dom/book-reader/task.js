const sizeButtons = document.querySelectorAll('.font-size');
const book = document.querySelector('.book');
const colorParent = document.querySelector('.book__control_color');
const colorButtons = colorParent.querySelectorAll('.color');
const bgColorParent = document.querySelector('.book__control_background');
const bgColorButtons = bgColorParent.querySelectorAll('.color');

sizeButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    sizeButtons.forEach(button => {
      button.classList.remove('font-size_active');
    });
    button.classList.add('font-size_active');
    if (button.classList.contains('font-size_small')) {
      book.classList.remove('book_fs-big');
      book.classList.add('book_fs-small');
    } else if (button.classList.contains('font-size_big')) {
      book.classList.remove('book_fs-small');
      book.classList.add('book_fs-big');
    } else {
      book.classList.remove('book_fs-small', 'book_fs-big');
    }
  });
});

colorButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    colorButtons.forEach(button => button.classList.remove('color_active'));
    button.classList.add('color_active');
    if (button.classList.contains('text_color_black')) {
      book.classList.remove('book_color-gray');
      book.classList.remove('book_color-whitesmoke');
      book.classList.add('book_color-black');
    } else if (button.classList.contains('text_color_gray')) {
      book.classList.remove('book_color-black');
      book.classList.remove('book_color-whitesmoke');
      book.classList.add('book_color-gray');
    } else {
      book.classList.remove('book_color-black');
      book.classList.remove('book_color-gray');
      book.classList.add('book_color-whitesmoke');
    }
  });
});

bgColorButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    bgColorButtons.forEach(button => button.classList.remove('color_active'));
    button.classList.add('color_active');
    if (button.classList.contains('bg_color_black')) {
      book.classList.remove('book_bg-gray');
      book.classList.remove('book_bg-white');
      book.classList.add('book_bg-black');
    } else if (button.classList.contains('bg_color_gray')) {
      book.classList.remove('book_bg-black');
      book.classList.remove('book_bg-white');
      book.classList.add('book_bg-gray');
    } else {
      book.classList.remove('bg_color_black');
      book.classList.remove('book_bg-gray');
      book.classList.add('book_bg-white');
    }
  });
});