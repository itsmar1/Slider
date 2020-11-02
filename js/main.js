// Get Slider Items
var sliderItems = Array.from(document.querySelectorAll('.slider-container img'));

// Get Number of Slides
var sliderCount = sliderItems.length;

// Set Current Slide 
var currentSlide = 1;

// Slider Number Element
var slideNumberElement = document.querySelector('#slider-number');


var prevButton = document.getElementById('prev');
var nextButton = document.getElementById('next');

prevButton.onclick = prevSlide;
nextButton.onclick = nextSlide;


function prevSlide(){
    console.log('previous');
}

function nextSlide(){
    console.log('next');
}
