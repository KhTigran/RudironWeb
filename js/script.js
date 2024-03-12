let currentSlide = 0;
  const slidesContainer = document.getElementById('slides');
  const slides = document.querySelectorAll('.slide');

  function togglePopup() {
    const popup = document.getElementById('popup');
    popup.classList.toggle('active');
    document.body.style.overflow = popup.classList.contains('active') ? 'hidden' : 'auto';
    if (popup.classList.contains('active')) {
      popup.style.animation = 'popupOpen 0.5s forwards';
    } else {
      popup.style.animation = 'popupClose 0.5s forwards';
    }
  }

  function showSlide(slideIndex) {
    slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }