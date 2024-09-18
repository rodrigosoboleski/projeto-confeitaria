let currentSlide = 0;
const slides = document.querySelector('.slides');
const slideImages = Array.from(document.querySelectorAll('.slides img'));

// Função para calcular a largura do slide com base na imagem atual
function getSlideWidth() {
    return slideImages[0].clientWidth + 10; // Inclui a margem direita
}

// Função para clonar as imagens e criar o loop infinito
function initializeCarousel() {
    slideImages.forEach((img) => {
        const clone = img.cloneNode(true);
        slides.appendChild(clone);
    });

    // Ajusta a largura total da div `slides`
    slides.style.width = `${getSlideWidth() * slideImages.length * 2}px`;
}

// Função para mover os slides
function moveToNextSlide() {
    currentSlide++;

    if (currentSlide >= slideImages.length) {
        slides.style.transition = 'none';
        slides.style.transform = `translateX(0)`;
        currentSlide = 0;

        setTimeout(() => {
            slides.style.transition = 'transform 0.5s ease-in-out';
            slides.style.transform = `translateX(${-getSlideWidth() * currentSlide}px)`;
        }, 50);
    } else {
        slides.style.transform = `translateX(${-getSlideWidth() * currentSlide}px)`;
    }
}

// Inicializa o carrossel e define o movimento automático
initializeCarousel();
setInterval(moveToNextSlide, 3000);

// Ajusta a largura dinamicamente ao redimensionar a tela
window.addEventListener('resize', () => {
    slides.style.width = `${getSlideWidth() * slideImages.length * 2}px`;
    slides.style.transform = `translateX(${-getSlideWidth() * currentSlide}px)`;
});
