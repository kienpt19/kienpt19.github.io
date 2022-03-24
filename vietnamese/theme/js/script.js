
let searchBtn = document.querySelector('.search-bar-btn');
let searchBar = document.querySelector('.form-search-header');


window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
}   

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');

});
$(document).ready(function(){
  $('.search-bar-btn').click(function(){ // ẩn hiện nội dung grammar
      $(this).parent().toggleClass('active');
      // $(this).parent().children('.form-search-header').slideToggle();
  });  
});



$(document).ready(function(){
  $('.show-menu').click(function(){
      $('.menu').addClass('active');
      $('.over-lay').addClass('open');
  })
  $('.over-lay').click(function(){
      $('.menu').removeClass('active');
      $('.over-lay').removeClass('open');
  })
  $('.btn-dropdown-menu').click(function(){ // ẩn hiện sub menu mobile
      if( $($(this).parent('li').children('ul')).is(':hidden')===true){
          $(this).addClass('open');
          $(this).parent('li').children('ul').slideDown(300);
      }
      else{
          $(this).removeClass('open');
          $(this).parent('li').children('ul').slideUp(300);
      };
  });
});


var swiper = new Swiper(".slide-banner__home", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".pagination-banner__home",
      clickable: true,
    },
  });

  var swiper = new Swiper(".slide-feedback__home", {
    navigation: {
      nextEl: ".pagination-button-feedback-next",
      prevEl: ".pagination-button-feddback-prev",
    },
    pagination: {
      el: ".pagination-slide-feedback",
      clickable: true,
    },
  });

//  back to top
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

  $(document).ready(function(){ //ẩn hiện mk
    $('.icon-input').click(function(){
      $(this).toggleClass('open');
      $(this).children('i').toggleClass('fa-eye-slash fa-eye');
      if($(this).hasClass('open')){
        $(this).prev().attr('type' , 'text');
      }else{
        $(this).prev().attr('type' , 'password');
      }
    });
  });


  // -------------------------------------
  $(document).ready(function(){
    $('.lesson-head').click(function(){ // ẩn hiện nội dung
        $('.show-content').addClass('active');
        // $('.toc_list').addClass('open');
        $(this).parent().toggleClass('active');
        $(this).parent().children('.lesson-content').slideToggle();
    });  
});

$(document).ready(function(){
  $('.show-result').click(function(){ // ẩn hiện nội dung
      $(this).parent().toggleClass('active');
      $(this).parent().children('.table-result').slideToggle();
  });  
});





$('.play-audio').click(function (e) {
  e.preventDefault();

  playAudio();
});


// slide overview
var swiper = new Swiper(".slide-lesson__overview", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
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
        slidesPerView: 2
    },
    1199: {
      slidesPerView: 3,
      spaceBetween: 24
    },
    1200: {
        slidesPerView: 3,
        spaceBetween: 24
    }
},
  navigation: {
    nextEl: ".overview-button-next",
    prevEl: ".overview-button-prev",
  },
});


$(document).ready(function(){
  $('.show-example__mobile').click(function(){ // ẩn hiện nội dung grammar
      // $('.show-content').addClass('active');
      // $('.toc_list').addClass('open');
      $(this).parent().toggleClass('active');
      $(this).parent().children('.list-example').slideToggle();
  });  
});




function swapUrlVideoOverview() {
  var el = document.querySelectorAll(".item-overview");
  for(var i =0; i < el.length; i++) {
    (function(i) {
      el[i].onclick = function() {
        var urlVideo = el[i].getAttribute('data-url');
        document.getElementById('tvs-video').setAttribute('src', urlVideo);
      };
    })(i);
  }
}