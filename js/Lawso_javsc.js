// List of background images
const backgrounds = [
    '/home/jlong/Pictures/snaps/WhatsApp Image 2024-09-17 at 1.14.05 PM.jpeg', // First image
    '/home/jlong/Pictures/snaps/archit.jpeg', // Add second image path here
    '/home/jlong/Pictures/snaps/WhatsApp Image 2024-09-05 at 7.27.48 PM.jpeg'  // Add third image path here
];

// Change background every 2 minutes (120,000 ms)
let currentBackgroundIndex = 0;
const mainContent = document.querySelector('.main-content');

function changeBackground() {
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
    mainContent.style.backgroundImage = `url(${backgrounds[currentBackgroundIndex]})`;
}

// Change background every 2 minutes
setInterval(changeBackground, 1200);
