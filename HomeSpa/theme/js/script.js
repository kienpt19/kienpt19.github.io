
$(document).ready(function(){
    const swiperBanner = new Swiper('.slide-banner__index', {
        slidesPerView: 1,
        loop: true,
        autoplay: true,
        disableOnInteraction: true,
        speed: 600,
        effect: "coverflow",
        spaceBetween: 30,
        navigation: {
            nextEl: ".slide-banner-next",
            prevEl: ".slide-banner-prev",
          },
        pagination: {
            el: ".pagination-banner-index",
            clickable: true,
        },
    });
})


var swiper = new Swiper(".slide-testimonial__index", {
    slidesPerView: 5,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: false,
    loopFillGroupWithBlank: true,
    breakpoints: {
        280: {
            slidesPerView: 1
        },
        575: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 2.5
        },
        991: {
            slidesPerView: 3.5,
            spaceBetween: 15
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 24
        }
    },
    navigation: {
      nextEl: ".slide-testimonial-next",
      prevEl: ".slide-testimonial-prev",
    },
  });

  var swiper = new Swiper(".slide-newspaper__index", {
    slidesPerView: 5,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: false,
    loopFillGroupWithBlank: true,

    breakpoints: {
        280: {
            slidesPerView: 1
        },
        575: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 2
        },
        991: {
            slidesPerView: 2.5,
            spaceBetween: 15
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 24
        }
    },
    pagination: {
      el: ".pagination-newspaper-index",
      clickable: true,
    },
  });

  var swiper = new Swiper(".slide-news-event__index", {
    slidesPerView: 5,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: false,
    loopFillGroupWithBlank: true,

    breakpoints: {
        280: {
            slidesPerView: 1
        },
        575: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 2
        },
        991: {
            slidesPerView: 2.5,
            spaceBetween: 15
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 24
        }
    },
    pagination: {
      el: ".pagination-news-event-index",
      clickable: true,
    },
  });
  var swiper = new Swiper(".slide-footer-basis__index", {
    slidesPerView: 5,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: false,
    loopFillGroupWithBlank: true,

    breakpoints: {
        280: {
            slidesPerView: 1
        },
        575: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 2.5
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 15
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 24
        }
    },
    navigation: {
        nextEl: ".slide-footer-basis-next",
        prevEl: ".slide-footer-basis-prev",
      },
  });

  $(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop()) {  //nếu thanh cuộn #0
            $('#backtop').fadeIn();
        }
        else{
            $('#backtop').fadeOut();
        }
    });
    $("#backtop").click(function(){   //event click backtop
            $('html,body').animate({scrollTop: 0
        }, 500);  // trả về 0 time 1s
    })
    var _width = $(window).width();
    if (_width > 991) {
        wow = new WOW();
        wow.init();
    }
  });
  $(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop()) {  //nếu thanh cuộn #0
            $('.footer-head').fadeIn();
        }
        else{
            $('.footer-head').fadeOut();
        }
    });
    $(".footer-head").click(function(){   //event click backtop
            $('html,body').animate({scrollTop: 0
        }, 500);  // trả về 0 time 1s
    })
    var _width = $(window).width();
    if (_width > 991) {
        wow = new WOW();
        wow.init();
    }
  });

  var swiper = new Swiper(".slide-leader__index", {
    slidesPerView: 5,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: false,
    loopFillGroupWithBlank: true,

    breakpoints: {
        280: {
            slidesPerView: 1
        },
        575: {
            slidesPerView: 1.5
        },
        768: {
            slidesPerView: 2
        },
        991: {
            slidesPerView: 2.5,
            spaceBetween: 15
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 24
        }
    },
    pagination: {
      el: ".pagination-leader-index",
      clickable: true,
    },
  });

$(document).ready(function(){
    // function.preventDefault();
    

    // $('.leader-text-icon').click(function(){
    //     // $('.leader-text').addClass('active');
    //     if( $($(this).parent('.leader-text'))){
    //         $(this).addClass('active');
    //     }
        // console.log(($(this)))
    // })
    $('.leader-text-icon').click(function(){ 
        if( $($(this).parent('.leader-text'))){
            $(this).addClass('active');
        }
        else{
            $(this).removeClass('active');
        };
    });
    // $('.leader-text-icon').click(function(){

    //     $('.leader-text').addClass('active');
        
    // })
});


var swiper = new Swiper(".certificate-slide__introduce",{
        slidesPerView: 4,
        loop: false,
        disableOnInteraction: true,
        speed: 600,
        spaceBetween: 37,
         loop: false,
        centeredSlides: true,
        disableOnInteraction: false,
        loop: true,
        effect: 'coverflow',

        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 50,
            modifier: 1,
            slideShadows: false,
        },
        pagination: {
            el: ".pagination-certification",
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1.5,
                spaceBetween: 10
            },
            576: {
                slidesPerView: 3,
                spaceBetween: 15
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 15
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 20
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 37
            },
        },
        pagination: {
            el: ".pagination-slide-introduce",
        },

    });


//   $(document).ready(function(){
//     $('#menu-bar').click(function(){
//         $('.menu-mobile').addClass('active');
//         $('.formclose').addClass('open');
//     })
//     $('.formclose').click(function(){
//         $('.menu-mobile').removeClass('active');
//         $('.formclose').removeClass('open');
//     })
//     $('.btn-close-menu-mobile').click(function(){
//         $('.menu-mobile').removeClass('active');
//         $('.formclose').removeClass('open');
//     })
//     $('.btn-drop-menu').click(function(){ // ẩn hiện sub menu mobile
//         if( $($(this).parent('li').children('ul')).is(':hidden')===true){
//             $(this).addClass('rotate');
//             $(this).parent('li').children('ul').slideDown(300);
//         }
//         else{
//             $(this).removeClass('rotate');
//             $(this).parent('li').children('ul').slideUp(300);
//         };
//     });
// });

$(document).ready(function(){
    $('.show-menu__mobile').click(function(){
        $('.menu-mobile').addClass('active');
        $('.formclose').addClass('open');
    })
    $('.formclose').click(function(){
        $('.menu-mobile').removeClass('active');
        $('.formclose').removeClass('open');
    })
    $('.btn-close-menu-mobile').click(function(){
        $('.menu-mobile').removeClass('active');
        $('.formclose').removeClass('open');
    })
    $('.btn-drop-menu').click(function(){ // ẩn hiện sub menu mobile
        if( $($(this).parent('li').children('ul')).is(':hidden')===true){
            $(this).addClass('rotate');
            $(this).parent('li').children('ul').slideDown(300);
        }
        else{
            $(this).removeClass('rotate');
            $(this).parent('li').children('ul').slideUp(300);
        };
    });
    $('.show-search__mobile').click(function(){
        $('.form-search__mobile').addClass('active');
    })
    $('.btn-close-search').click(function(){
        $('.form-search__mobile').removeClass('active');
    });
});

var swiper = new Swiper(".album-images-slide", {
    watchSlidesProgress: true,
    slidesPerView: 5,
    
    
  });


$(document).ready(function(){
    $('.toc-header').click(function(){ // ẩn hiện sub menu mobile
        $('.toggle-content-toc').addClass('active');
        // $('.toc_list').addClass('open');
        $(this).parent().toggleClass('active');
        $(this).parent().children('.toc_list').slideToggle();
    });  
});

$(document).ready(function(){
    $('.btn-get-contact').click(function(){
        $('.form-login').addClass('active');
        $('.formclose__accessary').addClass('open');
    });
    $('.formclose__accessary').click(function(){
        $('.form-login').removeClass('active');
        $('.formclose__accessary').removeClass('open');
    })
})


var swiper = new Swiper(".Featured-event-news__index", {
    slidesPerView: 5,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: false,
    loopFillGroupWithBlank: true,

    breakpoints: {
        280: {
            slidesPerView: 1
        },
        575: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 2
        },
        991: {
            slidesPerView: 2.5,
            spaceBetween: 15
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 24
        }
    },
    pagination: {
      el: ".pagination-newspaper-index",
      clickable: true,
    },
  });

 