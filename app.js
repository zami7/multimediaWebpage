$(document).ready(() => {
    $('#hamburger-menu').click(()=> {
        $('#hamburger-menu').toggleClass('active')
        $('#nav-menu').toggleClass('active')
    })

    let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]
    $('#hero-carousel').owlCarousel({
      items: 1,
      dots: false,
      loop: true,
      nav: true,
      navText: navText,
      autoplay: true,
      autoplayHoverPause: true

    })
    $('#top-games-slide').owlCarousel({
        items: 6,
        dots: false,
        loop: true,
        nav: true,
        autoplay: false,
        autoplayHoverPause: true,
        responsive: {
            500: {
                items:3
            },
            1280: {
                items:4
            },
            1600: {
                items:6
            }
            
        }
      })
    
})