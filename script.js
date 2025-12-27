// Function for Dark Mode Toggle [cite: 36]
const toggleBtn = document.getElementById('dark-mode-toggle');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    console.log("Dark mode toggled!");
});

// Function for Show/Hide (Flip) logic [cite: 40]
function flipCard(cardElement) {
    const backSection = cardElement.querySelector('.card-back');
    const frontSection = cardElement.querySelector('.card-front');
    
    // Simple show/hide toggle for the description
    if (backSection.classList.contains('hidden')) {
        backSection.classList.remove('hidden');
        frontSection.classList.add('opacity-20'); // Fade the front
    } else {
        backSection.classList.add('hidden');
        frontSection.classList.remove('opacity-20');
    }
}

// 2. Interactive Star Rating [cite: 34, 39]
function handleStarClick(event, container) {
    // Stop the click from triggering the card flip
    event.stopPropagation();
    
    if (event.target.classList.contains('star')) {
        const ratingValue = parseInt(event.target.getAttribute('data-value'));
        const stars = container.querySelectorAll('.star');
        container.setAttribute('data-chosen-rating', ratingValue);

        updateStarUI(container, ratingValue);
        
        // Visual confirmation [cite: 37, 39]
        console.log(`Rating permanently set to: ${ratingValue}`);
    }
}

function updateStarUI(container, value) {
    const stars = container.querySelectorAll('.star');
    stars.forEach(star => {
        const starValue = parseInt(star.getAttribute('data-value'));
        if (starValue <= value) {
            star.classList.add('active'); // CSS will color this gold
            star.classList.remove('text-gray-300');
        } else {
            star.classList.remove('active');
            star.classList.add('text-gray-300');
        }
    });
}

// 3. Card Flip/Description Toggle [cite: 40]
function toggleDescription(card) {
    card.classList.toggle('is-active');
}

// 3. Card Flip/Description Toggle [cite: 40]
function toggleDescription(card) {
    card.classList.toggle('is-active');
}

