document.addEventListener('DOMContentLoaded', () => {
    // Details Card 1 Carousel
    const cards1 = document.querySelectorAll('.card'); // Cards for Details Card 1
    const displayImage1 = document.getElementById('display-image'); // Display image for Details Card 1
  
    cards1.forEach((card) => {
      card.addEventListener('click', () => {
        // Remove 'selected' class from all cards in Details Card 1
        cards1.forEach((c) => {
          c.classList.remove('selected');
          const p = c.querySelector('p');
          p.classList.add('hide');
          p.classList.remove('show'); // Remove the 'show' class from unselected cards
        });
  
        // Add 'selected' class to the clicked card
        card.classList.add('selected');
        const p = card.querySelector('p');
        p.classList.remove('hide');
        p.classList.add('show'); // Add the 'show' class to the selected card
  
        // Change the display image based on the clicked card in Details Card 1
        const imgSrc = card.getAttribute('data-img');
        displayImage1.setAttribute('src', imgSrc);
      });
    });
  
    // Details Card 2
    const cards2 = document.querySelectorAll('.card');
    const displayImage2 = document.getElementById('display-image2'); // Use unique ID for display image
  
    cards2.forEach((card) => {
      card.addEventListener('click', () => {
        // Remove 'selected' class from all cards
        cards2.forEach((c) => {
          c.classList.remove('selected');
          const p = c.querySelector('p');
          p.classList.add('hide');
          p.classList.remove('show'); // Remove the 'show' class from unselected cards
        });
  
        // Add 'selected' class to the clicked card
        card.classList.add('selected');
        const p = card.querySelector('p');
        p.classList.remove('hide');
        p.classList.add('show'); // Add the 'show' class to the selected card
  
        // Change the display image based on the clicked card
        const imgSrc = card.getAttribute('data-img');
        displayImage2.setAttribute('src', imgSrc);
      });
    });
  
    //Carousel
    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentIndex = 0;
  
    const updateCarousel = () => {
      const offset = -currentIndex * 100;
      carouselInner.style.transform = `translateX(${offset}%)`;
    };
  
    prevButton.addEventListener('click', () => {
      currentIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
      updateCarousel();
    });
  
    nextButton.addEventListener('click', () => {
      currentIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
      updateCarousel();
    });
  });
  