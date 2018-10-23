 var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  console.log('plusSlides: ' + n);
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
  dots[slideIndex-1].className += " active";
}

var dot1 = document.getElementById('dot1');
dot1.addEventListener('click', function() {
  currentSlide(1);
})

var dot2 = document.getElementById('dot2');
dot2.addEventListener('click', function() {
  currentSlide(2);
})

var dot3 = document.getElementById('dot3');
dot3.addEventListener('click', function() {
  currentSlide(3);
})

var dot4 = document.getElementById('dot4');
dot4.addEventListener('click', function() {
  currentSlide(4);
})

var prevButton = document.getElementById('prev');
prevButton.addEventListener('click', function() {
  plusSlides(-1);
})

var nextButton = document.getElementById('next');
nextButton.addEventListener('click', function() {
  plusSlides(1);
})
