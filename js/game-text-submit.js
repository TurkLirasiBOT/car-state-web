// Kodlara karışmayalım.

document.addEventListener('DOMContentLoaded', function() {
    const newGameButton = document.getElementById('new-game-button');
    const continueButton = document.getElementById('continue-button');
    const message = document.getElementById('message');

    newGameButton.addEventListener('click', function() {
        newGameButton.classList.add('fade-out');
        continueButton.classList.add('fade-in');
        
        setTimeout(function() {
            newGameButton.style.display = 'none';
            continueButton.style.display = 'inline-block';
            message.innerHTML = 'Bakım sürecinde olduğumuz için oyun başlatılamıyor!';
        }, 500);
    });

    continueButton.addEventListener('click', function() {
        alert('Devam etmek için bir oyun kurmalısınız!');
    });
});

function goBack() {
    window.history.back();
}