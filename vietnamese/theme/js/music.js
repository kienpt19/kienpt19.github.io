jQuery(document).ready(function() {

  // inner variables
  var song;
  var tracker = $('.tracker');
  // var volume = $('.volume');

  function initAudio(elem) {
      var url = elem.attr('audiourl');
      var title = elem.text();
      var cover = elem.attr('cover');
      var artist = elem.attr('artist');

      $('.player .title').text(title);
      $('.player .artist').text(artist);
      $('.player .cover').css('background-image','url(data/' + cover+')');;

      song = new Audio('data/' + url);

      // timeupdate event listener
     
  }
  function playAudio() {
      song.play();

      tracker.slider("option", "max", song.duration);

      $('.play').addClass('hidden');
      $('.pause').addClass('visible');
  }
  function stopAudio() {
      song.pause();

      $('.play').removeClass('hidden');
      $('.pause').removeClass('visible');
  }

  // play click
  $('.play').click(function (e) {
      e.preventDefault();

      playAudio();
  });

  // pause click
  $('.pause').click(function (e) {
      e.preventDefault();

      stopAudio();
  });

  // initialization - first element in playlist
  initAudio($('.playlist li:first-child'));

   
});



function toast({
  title = '',
  message = '',
  type = 'info', 
  duration = 3000
}) {
  const main = document.getElementById('toast');
  if (main) {
      const toast = document.createElement('div');
      
      //auto remove toast
      const autoRemoveId = setTimeout(function() {
          main.removeChild(toast);
      }, duration + 1000);
      //remove toast when clickd
      toast.onclick = function(e) {
          if (e.target.closest('.toast__close')) {
              main.removeChild(toast);
              clearTimeout(autoRemoveId)
          }
      }

      const icons = {
          success: 'fas fa-check-circle',
          info: 'fas fa-info-circle',
          warning: 'fas fa-exclamation-triangle',
          error: 'fas fa-exclamation-circle',
      };
      const icon = icons[type];
      const delay = (duration / 1000).toFixed(2);

      toast.classList.add('toast', `toast--${type}`);
      toast.style.animation = `slideInLeft ease .5s , fadeOut linear 1s ${delay}s forwards`;

      toast.innerHTML = `
          <div class="toast__icon">
              <i class="${icon}"></i>
          </div>
          <div class="toast__body">
              <h3 class="toast__title">${title}</h3>
              <p class="toast__msg">${message}</p>
          </div>
          <div class="toast__close">
              <i class="fas fa-times"></i>
          </div>
      `;
      main.appendChild(toast);
  }


}



let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
}
searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});


$(document).ready(function(){
    $('.btn-play__video').click(function(){
        $('.video-img').addClass('active');
        $('.content').addClass('active');
        $('.s__content').addClass('active');
    });
});