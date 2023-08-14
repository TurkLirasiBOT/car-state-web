// Efekt animasyonu
function animateText() {
    const title = document.querySelector('.title');
    title.classList.add('animate');
}

// Sayfa yüklendiğinde animasyonu başlat
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(animateText, 500);
});
