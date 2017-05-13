// Detect hover device (leaving touch device as default)

window.addEventListener('mouseover', function onFirstHover() {
  document.body.classList.add('user-can-hover');
  window.removeEventListener('mouseover', onFirstHover, false);
}, false);

// Mobile Menu
$(function() {
  $(".js-mobile-nav__trigger").click(function(event){
    event.preventDefault();
    $(".js-site-nav__list").addClass("open");
  });

  $(".js-mobile-nav__close").click(function(event){
    event.preventDefault();
    $(".js-site-nav__list").removeClass("open");
  });
});
