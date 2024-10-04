let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.querySelectorAll(
    ".slideshow-container:not([style*='display: none']) .slide"
  );
  let dots = document.getElementsByClassName("dot");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Muda a imagem a cada 2 segundos
}

function currentSlide(n) {
  slideIndex = n;
  showSlides();
}

function showGroup(groupNumber) {
  let groups = document.getElementsByClassName("slideshow-container");
  for (let i = 0; i < groups.length; i++) {
    groups[i].style.display = "none";
  }
  document.getElementById("group" + groupNumber).style.display = "block";
  slideIndex = 0;
  showSlides();
}
