const images = [
    'assets/img/hero-bg3.png',
    'assets/img/hero-bg1.png',
    'assets/img/hero-bg2.png', 
    'assets/img/hero-bg4.png',
    'assets/img/hero-bg5.png'
  ];
  
  let currentIndex = 0;
  const heroImage = document.getElementById('hero-image');
  
  function changeImage() {
    // Add zoom effect before changing the image
    heroImage.classList.add('zoom');
  
    // Wait for 1 second (duration of zoom effect) before changing the image
    setTimeout(() => {
      // Change image source
      currentIndex = (currentIndex + 1) % images.length; // Loop through the images
      heroImage.src = images[currentIndex];
  
      // Remove zoom effect after changing the image
      heroImage.classList.remove('zoom');
    }, 1000); // This is the zoom effect duration
  }
  
  // Change image every 3 seconds
  setInterval(changeImage, 3000);
  
  // Initial image change after 3 seconds to start the cycle
  setTimeout(changeImage, 3000);


  
    document.addEventListener('DOMContentLoaded', () => {
      const typewriterElement = document.getElementById('typewriter');
      const dataText = ["We Beleive...", "Your Celebration...", "Deserves to be...", "Extraordinary...", ];

      function typeWriter(text, i, fnCallback) {
        if (i < text.length) {
          typewriterElement.innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
          setTimeout(function() {
            typeWriter(text, i + 1, fnCallback);
          }, 100);
        } else if (typeof fnCallback == 'function') {
          setTimeout(fnCallback, 700);
        }
      }

      function startTextAnimation(i) {
        if (i >= dataText.length) {
          i = 0; // restart animation loop
        }
        typeWriter(dataText[i], 0, function() {
          startTextAnimation(i + 1);
        });
      }

      startTextAnimation(0);
    });
