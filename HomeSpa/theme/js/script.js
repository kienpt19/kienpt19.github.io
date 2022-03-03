
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
            slidesPerView: 1
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
    $('.leader-text-icon').click(function(){
        $('.leader-text').addClass('active');
    })
    
});




var swiper = new Swiper(".certificate-slide__introduce", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "3",
    loop: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
      breakpoints: {
        280: {
            slidesPerView: 1
        },
        575: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 1
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 15
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 24
        }
    },
    },
    pagination: {
      el: ".pagination-slide-introduce",
    },
  });

  $(document).ready(function(){
    $('#menu-bar').click(function(){
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