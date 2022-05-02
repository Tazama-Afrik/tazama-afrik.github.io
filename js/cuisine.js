var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  

}
let change = plusSlides;
setInterval("change(1)", 3000);

////////////// HANDLING CLICKS AND DISPLAY OF MENU /////////////
$('#menu-icon').click(function(){
$('#menu').slideToggle();
$(this).fadeOut();
$('#closer-icon').fadeIn();
});
$('#closer-icon').click(function(){
$('#menu').slideToggle();
$(this).fadeOut();
$('#menu-icon').fadeIn();
});
$('.b').click(function(){
$('#menu').slideUp();
});
  ////////////Scroll To Top///////////

$toTop = $(".back-to-top");
let showOnPx = 100;
// $pageProgressBar = $(".progress-bar"); // DOn't remove this line

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    $toTop.show();
  } else {
    $toTop.slideUp();
  }
});

const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth"
  });
};
$toTop.click(goToTop);

///////////// Profile Display/////////////
$('#obed').click(function(){
  $('#fth').fadeOut();
  $('#ob').fadeIn();
})
$('#faith').click(function(){
  $('#ob').fadeOut();
  $('#fth').fadeIn();
})
$('.clos').click(function(){
  $('#ob').fadeOut();
  $('#fth').fadeOut();
})