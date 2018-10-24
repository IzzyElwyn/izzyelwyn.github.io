function openNav() {
    document.getElementById("mySidenav").style.width = "10%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

var modal = document.getElementById('myBio');

var btn = document.getElementById("bioBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  console.log("plusSlides got: " + n);
  showSlides((slideIndex += n));
}

var prevButton = document.getElementById("prev");
prevButton.addEventListener("click", function() {
  plusSlides(-1);
});

var nextButton = document.getElementById("next");
nextButton.addEventListener("click", function() {
  plusSlides(1);
});

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

var dot1 = document.getElementById("dot1");
dot1.addEventListener("click", function() {
  currentSlide(1);
});

var dot2 = document.getElementById("dot2");
dot2.addEventListener("click", function() {
  currentSlide(2);
});

var dot3 = document.getElementById("dot3");
dot3.addEventListener("click", function() {
  currentSlide(3);
});

var dot4 = document.getElementById("dot4");
dot4.addEventListener("click", function() {
  currentSlide(4);
});

var pb1 = document.getElementById("project-box1");

var button = document.getElementById("vpbutton");

var skills = document.getElementById("vpskills");

x = skills.style;

function toggleSkills() {
  if (x.display == "none" || x.display == "") {
    x.display = "inline";
  } else {
    x.display = "none";
  }
}

button.addEventListener("click", toggleSkills);

var button2 = document.getElementById("rbutton");

var skills2 = document.getElementById("rskills");

c = skills2.style;

function toggleSkills2() {
  if (c.display == "none" || c.display == "") {
    c.display = "inline";
  } else {
    c.display = "none";
  }
}

button2.addEventListener("click", toggleSkills2);

var button3 = document.getElementById("vpabutton");

var skills3 = document.getElementById("vpaskills");

v = skills3.style;

function toggleSkills3() {
  if (v.display == "none" || v.display == "") {
    v.display = "inline";
  } else {
    v.display = "none";
  }
}

button3.addEventListener("click", toggleSkills3);

var button4 = document.getElementById("vpsbutton");

var skills4 = document.getElementById("vpsskills");

b = skills4.style;

function toggleSkills4() {
  if (b.display == "none" || b.display == "") {
    b.display = "inline";
  } else {
    b.display = "none";
  }
}

button4.addEventListener("click", toggleSkills4);
