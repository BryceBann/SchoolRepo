// TODO: Which element is the following line of code selecting?
//the code below is selecting the div for the holding the buttons and img
var carousel = document.querySelector(".carouselbox");
// TODO: Which element is the following line of code selecting?
//the actual button to move the carousle
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");
var index = 0;
var currentImage;

var images = [
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/201",
  "https://picsum.photos/300/202",
  "https://picsum.photos/300/203"
];

carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";

function navigate(direction) {
  index = index + direction;
  if (index < 0) { 
    index = images.length - 1; 
  } else if (index > images.length - 1) { 
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

// TODO: Describe the functionality of the following event listener.
//listens for the click  to change the image 
carousel.addEventListener("click", function() {
  window.location.href = images[index];
});

// TODO: Describe the functionality of the following event listener.
//listens for the click to determain the direction for the carousel to move
next.addEventListener("click", function(event) {
  // TODO: What is the purpose of the following line of code?
  event.stopPropagation();

  navigate(1);
});

// TODO: Describe the functionality of the following event listener.
prev.addEventListener("click", function(event) {
    // TODO: What would happen if we didn't add the following line of code?
  event.stopPropagation();

  navigate(-1);
});

navigate(0);
