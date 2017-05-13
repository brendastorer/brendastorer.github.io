// Detect touch device

window.addEventListener('touchstart', function onFirstTouch() {
  document.body.classList.add('user-has-touch');
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
