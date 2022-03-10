const titels = document.querySelectorAll("[data-name='catalog-btn']");

titels.forEach(function(item){
  item.addEventListener('click', showContent)
})

function showContent() {
  this.nextElementSibling.classList.toggle('hidden');
};

const header = document.getElementById('header');

window.addEventListener('scroll', checkScroll)

function checkScroll() {
  let scrollPos = window.scrollY;
  if (scrollPos > 200) {
    header.classList.add('header--show');
  } else {
    header.classList.remove('header--show')
  }
}




$(function(){

  $('.popup__link').on('click', function(){
    $('.popup').addClass('popup--active');
  });

  $('.popup__close').on('click', function(){
    $('.popup').removeClass('popup--active');
  });

});

$('.burger, .menu a').on('click', function(){
  $('.menu').toggleClass('menu--active');
  $('.burger').toggleClass('burger--active')
});
