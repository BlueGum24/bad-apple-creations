
// Menu-toggle button

$(document).ready(function() {
  $(".menu-icon").on("click", function() {
    $("nav").toggleClass("showing");
    $("nav ul").toggleClass("showing");
  });
});

// Scrolling Effect

$(window).on("scroll", function() {
  if($(window).scrollTop()) {
    $('nav').addClass('black');
  }

  else {
    $('nav').removeClass('black');
  }
})

$('.thumbnail').hover(function(){
  $(this).children(".description").slideDown();
},
                      function(){
  $(this).children(".description").fadeOut();
});
