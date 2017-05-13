window.addEventListener('mouseover', function onFirstHover() {
  document.body.classList.add('user-can-hover');
  window.removeEventListener('mouseover', onFirstHover, false);
}, false);
