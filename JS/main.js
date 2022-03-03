const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchInputEl.setAttribute('placeholder', '검색할 단어를 입력하세요');
  searchEl.classList.add('focused');

});

searchInputEl.addEventListener('blur', function () {
  searchInputEl.setAttribute('placeholder', '');
  searchEl.classList.remove('focused');
});