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
            nextEl: '.btn-banner__next',
            prevEl: '.btn-banner__prev'
        },
        pagination: {
            el: ".pagination-banner-index",
            clickable: true,
        },
    });
})


var swiper = new Swiper(".slider-customers", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
    spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
    spaceBetween: 20,

          },
        992: {
          slidesPerView: 3,
    spaceBetween: 20,

        },
        1200: {
            slidesPerView: 4,
      spaceBetween: 20,
  
          },
        
      },
      pagination: {
        el: ".pagination-slider-customers",
        clickable: true,
    },
});


$(document).ready(function(){
    const swiperBanner = new Swiper('.slide-banner__product', {
        slidesPerView: 1,
        loop: true,
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
            el: ".pagination-banner-index",
            clickable: true,
        },
    });
})

$(document).ready(function(){
    const swiperBanner = new Swiper('.slide-reason__product', {
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        speed: 600,
        effect: "coverflow",
        spaceBetween: 30,
        navigation: {
            nextEl: '.btn-banner__next',
            prevEl: '.btn-banner__prev'
        },
        pagination: {
            el: ".pagination-banner-index",
            clickable: true,
        },
    });
})

var swiper = new Swiper(".slider-certification__product", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
    spaceBetween: 20,

          },
        992: {
          slidesPerView: 4,
    spaceBetween: 20,

        },
        
      },
});





let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');


window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
}   

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');

});


$(document).ready(function(){
    $('#menu-bar').click(function(){
        $('.nav-bar').addClass('active');
        $('.formclose').addClass('open');
    })
    $('.formclose').click(function(){
        $('.nav-bar').removeClass('active');
        $('.formclose').removeClass('open');
    })
})



$(document).ready(function(){
    $('.dog-head').click(function(){
        $('.notification__container').addClass('active');
        $('.formclosenotification').addClass('open');
    })
    $('.formclosenotification').click(function(){
        $('.notification__container').removeClass('active');
        $('.formclosenotification').removeClass('open');
    })
})




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


// trang hop tác

$(document).ready(function(){
    const swiperBanner = new Swiper('.slide-banner__cooperate', {
        slidesPerView: 1,
        loop: true,
        disableOnInteraction: true,
        speed: 600,
        effect: "coverflow",
        spaceBetween: 30,
        navigation: {
            nextEl: '.btn-banner__next',
            prevEl: '.btn-banner__prev'
        },
        pagination: {
            el: ".pagination-banner-cooperate",
            clickable: true,
        },
    });
})

//  policy
$(document).ready(function(){
    const swiperBanner = new Swiper('.slide__policy', {
        slidesPerView: 1,
        loop: true,
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
            el: ".pagination-slide-policy",
            clickable: true,
        },
    });
})