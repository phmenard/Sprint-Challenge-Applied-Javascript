/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

// build an array of images to work with 
images = ['./assets/carousel/mountains.jpeg', './assets/carousel/computer.jpeg',
  './assets/carousel/trees.jpeg', './assets/carousel/turntable.jpeg'];

// Build the carousel  
function creatCarousel(currentImageIndex) {
  const carousel = document.createElement('div');
  carousel.classList.add('carousel');

  // build left arrow button
  const leftButton = document.createElement('div');
  leftButton.classList.add('left-button');
  leftButton.textContent = '<';
  leftButton.addEventListener('click', (event) => {
    currentImageIndex--;
    
  })
  carousel.appendChild(leftButton);

  // Add images
  images.forEach((image, index) => {
    const img = document.createElement('img');
    img.src = image;
    if (index == currentImageIndex) {
      img.style.display = 'block';
    } else {
      img.style.display = 'none';
    }

    carousel.appendChild(img);
  })

  // grab all the carousel images
  const carouselImages = document.querySelectorAll('.img');

  // build right arrow button
  const rightButton = document.createElement('div');
  rightButton.classList.add('right-button');
  rightButton.textContent = '>';
  rightButton.addEventListener('click', (event) => {
    currentImageIndex++;

  })
  carousel.appendChild(rightButton);

  // return our new shiny carousel
  return carousel;

}

// grab the carousel container and appent the new carousel
const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.appendChild(creatCarousel(3));
