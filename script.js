// Function for Dark Mode Toggle 
const toggleBtn = document.getElementById('dark-mode-toggle');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    console.log("Dark mode toggled!");
});

// Function for Show/Hide 
function flipCard(cardElement) {
    const backSection = cardElement.querySelector('.card-back');
    const frontSection = cardElement.querySelector('.card-front');
    
    // show/hide toggle for the description
    if (backSection.classList.contains('hidden')) {
        backSection.classList.remove('hidden');
        frontSection.classList.add('opacity-20'); // Fade the front
    } else {
        backSection.classList.add('hidden');
        frontSection.classList.remove('opacity-20');
    }
}

// Star Rating 
function handleStarClick(event, container) {
    event.stopPropagation();
    
    if (event.target.classList.contains('star')) {
        const ratingValue = parseInt(event.target.getAttribute('data-value'));
        const stars = container.querySelectorAll('.star');
        container.setAttribute('data-chosen-rating', ratingValue);

        updateStarUI(container, ratingValue);
        console.log(`Rating permanently set to: ${ratingValue}`);
    }
}

function updateStarUI(container, value) {
    const stars = container.querySelectorAll('.star');
    stars.forEach(star => {
        const starValue = parseInt(star.getAttribute('data-value'));
        if (starValue <= value) {
            star.classList.add('active'); 
            star.classList.remove('text-gray-300');
        } else {
            star.classList.remove('active');
            star.classList.add('text-gray-300');
        }
    });
}

//Card Flip/Description Toggle 
function toggleDescription(card) {
    card.classList.toggle('is-active');
}



