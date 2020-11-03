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


// Get the new created UL
var paginationNewElement = document.getElementById('pagination-ul')

// Get Pagination Items 
var paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// Loop through pagination bullets
for (var i=0; i < paginationBullets.length; i++ ){

    paginationBullets[i].onclick = function(){
        currentSlide = parseInt(this.getAttribute('data-index'));

        theChecker();
    }
}


// Trigger The Checker Function
theChecker();






// Previous slide function
function prevSlide(){
    
    if ( prevButton.classList.contains('disabled')){
        return false
    }
    else {
        currentSlide--;

        theChecker();
    }
}

// Next slide function
function nextSlide(){
    
    if ( nextButton.classList.contains('disabled')){
        return false
    }
    else {
        currentSlide++;

        theChecker();
    }
}


// Create the checker Function
function theChecker(){

    // Set the slide number
    slideNumberElement.textContent = 'Slider #' + currentSlide + ' 0f ' + sliderCount;

    // Remove all active
    removeAllActive();

    // Set Active Class on Current Slide
    sliderItems[ currentSlide - 1 ].classList.add('active');

    // Set Active Class on Active Pagination Item
    paginationNewElement.children[currentSlide - 1].classList.add('active');

    // Check if current slide is the first
    if ( currentSlide == 1 ) {
        prevButton.classList.add('disabled');
    }
    else {
        prevButton.classList.remove('disabled');
    }

    // Check if current slide is the latest
    if ( currentSlide == sliderCount ) {
        nextButton.classList.add('disabled');
    }
    else {
        nextButton.classList.remove('disabled');
    }
    
}



// Remove all Active Classes from Images and Pagination Bullets
function removeAllActive(){

    // Loop through Images
    sliderItems.forEach(function(img){
        img.classList.remove('active');
    });

    // Loop through pagination Bullets
    paginationBullets.forEach(function(bullet){
        bullet.classList.remove('active');
    });
}

