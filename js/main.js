window.addEventListener('DOMContentLoaded', () => {
   // AOS 
  AOS.init({
    once: false,
    duration: 1500,
  })

  // Typing text
  const homeTitleText = `We're a multi-disciplinary design studio that helps brands thrive.` // Ваш текст
	const delay = 90; // Скорость печатания
	const homeTitle = document.querySelector('.home__title'); // id элемента для вывода результата

  const typedText = (text, elem, delay) => {
    if(text.length > 0) {
			elem.innerHTML += text[0]
      
			setTimeout(
				function() {
					typedText(text.slice(1), elem, delay); 
				}, delay
			)
		}
  }

	typedText(homeTitleText, homeTitle, delay);

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

  // Fixing navigation on scroll  
  const headerFixed = () => {
    const header = document.querySelector('.header')
    const home = document.querySelector('.home')  
    let scrollTop = window.scrollY
    let homeCenter = home.offsetHeight / 2

    if (scrollTop >= homeCenter) {
      header.classList.add('header-fixed')
      home.style.marginTop = `${header.offsetHeight}px`
    } else {
      header.classList.remove('header-fixed')
      home.style.marginTop = `0px`
    }
  }

  headerFixed()
  window.addEventListener('scroll', () => {
    headerFixed()
  })

  // Modal
  // const modalTrigger = document.querySelectorAll('[data-contactus-modal]')
  // const modalContact = document.querySelector('.getintouch')
  // const modalBtnClose = modalContact.querySelector('.btn__close')

  // modalTrigger.forEach(btn => {
  //   btn.addEventListener('click', () => {
  //     modalContact.classList.add('active')
  //     document.body.style.overflow = 'hidden'
  //     document.body.style.paddingRight = '15px'
  //   })
  // })
})