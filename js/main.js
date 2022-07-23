window.addEventListener('DOMContentLoaded', () => {
   // AOS 
  AOS.init({
    once: false,
    duration: 1500,
  })

  $("a[href*='#']").on("click", function(e){
    const anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top
    }, 777);
    e.preventDefault();
    return false;
  });
})