document.addEventListener('DOMContentLoaded', function() {
    var guncellemelerListesi = document.getElementById('guncellemeler-listesi');
    var guncellemeler = guncellemelerListesi.getElementsByTagName('li');
  
    // Her bir güncelleme öğesine animasyon ekleyelim
    for (var i = 0; i < guncellemeler.length; i++) {
      guncellemeler[i].style.animation = 'slide-up 0.5s ease ' + (i * 0.2) + 's both';
    }
  });
  