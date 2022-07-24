window.addEventListener('DOMContentLoaded', () => {
   // AOS 
  AOS.init({
    once: false,
    duration: 1500,
  })

  // Links scroll
  const headerNav = document.querySelector('.header-nav')
  const footerNav = document.querySelector('.footer-nav')

  function linkScroll(nav) {
    const links = nav.querySelectorAll('a[href*="#"')

    $(links).on("click", function(e){
      const anchor = $(this)
      $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
      }, 777);
      e.preventDefault()
      return false;
    })
  }

  linkScroll(headerNav)
  linkScroll(footerNav)

  // Nav fixed
  
})