// Get Slider Items
var sliderItems = Array.from(document.querySelectorAll('.slider-container img'));

// Get Number of Slides
var sliderCount = sliderItems.length;

// Set Current Slide 
var currentSlide = 1;

// Slider Number Element
var slideNumberElement = document.querySelector('#slider-number');

// previous and next buttons
var prevButton = document.getElementById('prev');
var nextButton = document.getElementById('next');

// handle click on prev and next buttons
prevButton.onclick = prevSlide;
nextButton.onclick = nextSlide;


// Create the main UL Element
var paginationElement = document.createElement('ul');

// Create ID on Created UL Element
paginationElement.setAttribute('id', 'pagination-ul');


// Create list items based on Slides Count
for ( var i=1; i <= sliderCount; i++){

    // Create the LI 
    var paginationItem = document.createElement('li');

    // Set Custom Attribute
    paginationItem.setAttribute('data-index', i);

    // Set Item content
    paginationItem.appendChild(document.createTextNode(i));

    // Append Items to the main UL Element 
    paginationElement.appendChild(paginationItem);

}

// Add the created UL Element the page
document.getElementById('indicators').appendChild(paginationElement);






// Previous slide function
function prevSlide(){
    console.log('previous');
}

// Next slide function
function nextSlide(){
    console.log('next');
}
