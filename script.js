

// code for details card 1
document.addEventListener("DOMContentLoaded", () => {
    const cards1 = document.querySelectorAll('.card'); // Cards for Details Card 1
    const cards2 = document.querySelectorAll('.card2'); // Cards for Details Card 2
    const displayImage1 = document.getElementById('display-image'); // Display image for Details Card 1
    const displayImage2 = document.getElementById('display-image2'); // Display image for Details Card 2
    
    cards1.forEach(card => {
        card.addEventListener('click', () => {
            // Remove 'selected' class from all cards in Details Card 1
            cards1.forEach(c => c.classList.remove('selected'));
            // Add 'selected' class to the clicked card
            card.classList.add('selected');
            // Change the display image based on the clicked card in Details Card 1
            const imgSrc = card.getAttribute('data-img');
            displayImage1.setAttribute('src', imgSrc);
        });
    });
    
    
});



// code for details card 2
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');
    const displayImage = document.getElementById('display-image2'); // Use unique ID for display image

    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Remove 'selected' class from all cards
            cards.forEach(c => c.classList.remove('selected'));
            // Add 'selected' class to the clicked card
            card.classList.add('selected');
            // Change the display image based on the clicked card
            const imgSrc = card.getAttribute('data-img');
            displayImage.setAttribute('src', imgSrc);
        });
    });
});


//Carousel
document.addEventListener('DOMContentLoaded', () => {
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
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });
});