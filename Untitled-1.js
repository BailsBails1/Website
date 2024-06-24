// script.js

// Function to cycle through carousel items
function cycleCarousel() {
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    // Function to show the next item
    function showNextItem() {
        // Hide the current item by sliding it out to the left
        items[currentIndex].style.transform = 'translateX(-100%)';

        // Calculate the next index
        currentIndex = (currentIndex + 1) % items.length;

        // Show the next item by sliding it in from the right
        items[currentIndex].style.transform = 'translateX(0)';

        // Reset the position of the previous item to the right for the next cycle
        setTimeout(() => {
            items[(currentIndex - 1 + items.length) % items.length].style.transform = 'translateX(100%)';
        }, 500); // Match the duration of the CSS transition
    }

    // Set an interval to cycle through items every 3 seconds
    setInterval(showNextItem, 3000);
}

// Call the function to start the carousel
cycleCarousel();