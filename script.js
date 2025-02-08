document.getElementById('valentineButton').addEventListener('click', function() {
    const response = document.getElementById('response');
    response.textContent = "Yay! I'm so happy! 💖";

    // Add more hearts when the button is clicked
    for (let i = 0; i < 10; i++) {
        createHeart();
    }
});

function createHeart() {
    const heart = document.createElement('span');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.querySelector('.hearts').appendChild(heart);

    // Remove the heart after the animation ends
    setTimeout(() => {
        heart.remove();
    }, 5000);
}