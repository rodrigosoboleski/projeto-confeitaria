/*=== CARROSSEL ========================*/
let currentSlide = 0;
const slides = document.querySelector('.slides');
const slideImages = Array.from(document.querySelectorAll('.slides img'));
const totalSlides = slideImages.length;
const slideWidth = slideImages[0].clientWidth + 10; // Incluindo o margin-right

// Clone as imagens e adicione ao final para criar o efeito de loop
function initializeCarousel() {
    slideImages.forEach(img => {
        const clone = img.cloneNode(true);
        slides.appendChild(clone);
    });
    slides.style.width = `${slideWidth * totalSlides * 2}px`; // Define a largura total para acomodar todos os slides
    slides.style.transform = `translateX(0)`;
}

function moveToNextSlide() {
    currentSlide++;
    if (currentSlide >= totalSlides) {
        slides.style.transition = 'none'; // Remove a transição ao voltar para o início
        slides.style.transform = `translateX(0)`;
        currentSlide = 0;
        setTimeout(() => {
            slides.style.transition = 'transform 1s ease-in-out'; // Reativa a transição
            slides.style.transform = `translateX(${-slideWidth * currentSlide}px)`;
        }, 50);
    } else {
        slides.style.transform = `translateX(${-slideWidth * currentSlide}px)`;
    }
}

// Inicializa o carrossel e define a transição automática
initializeCarousel();
setInterval(moveToNextSlide, 3000); // Mover automaticamente a cada 3 segundos
/*======================================*/