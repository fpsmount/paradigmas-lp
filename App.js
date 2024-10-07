let currentSlideIndex = 0;

function changeSlide(groupId) {
  //id do grupo de slides
  const groups = document.querySelectorAll(".slides"); //seleciona todos os elementos com a classe .slides
  groups.forEach((group) => (group.style.display = "none")); // e depois esconde
  document.getElementById(groupId).style.display = "block"; // elemento html que tem o mesmo Id que o groupId
  currentSlideIndex = 0; // Reinicia o índice do slide
  updateSlides(groupId);
}

function nextSlide(groupId) {
  const group = document.getElementById(groupId); //Elemento que represendou grupo de slides. group fas referencia a esse elemento
  const slides = group.getElementsByTagName("img"); //elementou group que obtive na linha anterior, buscando os elementos "img". slides tem a coleção de slides dentro de group
  currentSlideIndex = (currentSlideIndex + 1) % slides.length; //avançar os slides. o % é para voltar para o primeiro slide caso ultrapasse o ultimo slide
  updateSlides(groupId);
}

function updateSlides(groupId) {
  const group = document.getElementById(groupId); //Elemento que represendou grupo de slides. group fas referencia a esse elendo
  const slides = group.getElementsByTagName("img"); //elementou group que obtive na linha anterior, buscando os elementos "img". slides tem a coleção de slides dentro de group
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = i === currentSlideIndex ? "block" : "none"; //percorre todos os slides e da um block no slide que é igual ao indice
  }
}
function prevSlide(groupId) {
  //grupo de slides
  const group = document.getElementById(groupId);
  const slides = group.getElementsByTagName("img");
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length; // Cicla para o slide anterior
  updateSlides(groupId);
}
