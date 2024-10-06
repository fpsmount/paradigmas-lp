let currentSlideIndex = 0;

function changeSlide(groupId) {
  const groups = document.querySelectorAll(".slides");
  groups.forEach((group) => (group.style.display = "none")); // Esconde todos os grupos
  document.getElementById(groupId).style.display = "block"; // Mostra o grupo selecionado
  currentSlideIndex = 0; // Reinicia o índice do slide
  updateSlides(groupId);
}

function nextSlide(groupId) {
  const group = document.getElementById(groupId);
  const slides = group.getElementsByTagName("img");
  currentSlideIndex = (currentSlideIndex + 1) % slides.length; // Cicla entre os slides
  updateSlides(groupId);
}

function updateSlides(groupId) {
  const group = document.getElementById(groupId);
  const slides = group.getElementsByTagName("img");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = i === currentSlideIndex ? "block" : "none"; // Mostra apenas o slide atual
  }
}
function prevSlide(groupId) {
  const group = document.getElementById(groupId);
  const slides = group.getElementsByTagName("img");
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length; // Cicla para o slide anterior
  updateSlides(groupId);
}
