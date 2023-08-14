// Ana menü seçeneklerini seçme
const menuOptions = document.querySelectorAll('.menu a');

// Fare imleci seçenekler üzerine geldiğinde
menuOptions.forEach(option => {
  option.addEventListener('mouseover', () => {
    // Animasyonlu efekt sınıfını ekle
    option.classList.add('option-hover');
  });

  option.addEventListener('mouseout', () => {
    // Animasyonlu efekt sınıfını kaldır
    option.classList.remove('option-hover');
  });
});
