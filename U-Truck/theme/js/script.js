$(document).ready(function(){
    const swiperBanner = new Swiper('.slide-banner__main', {
        slidesPerView: 1,
        loop: false,
        autoplay: true,
        disableOnInteraction: true,
        speed: 600,
        effect: "coverflow",
        spaceBetween: 30,
        navigation: {
            nextEl: '.btn-banner__next',
            prevEl: '.btn-banner__prev'
        },
        pagination: {
            el: ".pagination-banner__main",
            clickable: true,
        },
    });
})


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




var swiper = new Swiper(".slide-home-list-cate", {
    slidesPerView: 6,
    loop: false,
        disableOnInteraction: true,
        speed:600,
        spaceBetween: 15,
        breakpoints: {
            280: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            575: {
                slidesPerView: 4,
                spaceBetween: 15
            },
            991: {
                slidesPerView: 5,
                spaceBetween: 20
            },
            1200:{
                slidesPerView: 6,
                spaceBetween: 32
            },
            1600:{
                slidesPerView: 6,
                spaceBetween: 64
            }
        },
    grid: {
      rows: 2,
    },
    spaceBetween: 30,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
  });



  var swiper = new Swiper(".slider-video-product-home", {
    slidesPerView: 5,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
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
            slidesPerView: 4,
            spaceBetween: 15
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 24
        }
    },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    navigation: {
      nextEl: ".slide-video-product-next",
      prevEl: ".slide-video-product-prev",
    },
  });


  $(document).ready(function(){
    $('.item-videos').click(function(){
        $('.item-videos').addClass('active');
        $('.formclosenotification').addClass('open');
    })
    $('.formclosenotification').click(function(){
        $('.item-videos').removeClass('active');
        $('.formclosenotification').removeClass('open');
    })
})


  var swiper = new Swiper(".partner-home__slide", {
    slidesPerView: 7,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
        
        280: {
            slidesPerView: 1,
            spaceBetween: 15
        },
        575: {
            slidesPerView: 4,
            spaceBetween: 15
        },
        991: {
            slidesPerView: 5,
            spaceBetween: 20
        },
        1200:{
            slidesPerView: 6,
            spaceBetween: 32
        },
        1600:{
            slidesPerView: 6,
            spaceBetween: 64
        }
    },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    navigation: {
      nextEl: ".slide-partner-main-prev",
      prevEl: ".slide-partner-main-next",
    },
  });



  
// backup

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


// slide product car

var swiper = new Swiper(".slide-product-car", {
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
            slidesPerView: 4,
            spaceBetween: 15
        },
        1200: {
            slidesPerView: 6,
            spaceBetween: 24
        }
    },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    navigation: {
      nextEl: ".slide-video-product-next",
      prevEl: ".slide-video-product-prev",
    },
  });

  














    var swiper = new Swiper(".slider-related-products", {
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
                slidesPerView: 4,
                spaceBetween: 15
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 24
            }
        },
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
        navigation: {
          nextEl: ".slide-video-product-next",
          prevEl: ".slide-video-product-prev",
        },
      });


      $(document).ready(function(){
        $('.nav-items').click(function(){
            $('.tab-pane').addClass('active');
            $('.fade').addClass('show');
        })
        
        
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

    var swiper = new Swiper(".slide-development-history", {
        slidesPerView: 7,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: false,
        loopFillGroupWithBlank: true,
        breakpoints: {
            
            280: {
                slidesPerView: 1,
                spaceBetween: 15
            },
            575: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            1200:{
                slidesPerView: 4,
                spaceBetween: 32
            },
            1600:{
                slidesPerView: 5,
                spaceBetween: 64
            }
        },
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
        navigation: {
          nextEl: ".slide-partner-main-prev",
          prevEl: ".slide-partner-main-next",
        },
      });





// tạo form tìm kiếm
function timkiem()
{
    //danh sach tìm kiếm
    var danhsachtimkiem="xe ben, xe tải, xe oto, xe cẩu";
    var timkiem=document.getElementById("timkiem").ariaValueMax;
    alert(tim-kiem);
}






      









    
      