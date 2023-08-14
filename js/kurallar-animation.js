document.addEventListener('DOMContentLoaded', function() {
    const basliklar = document.querySelectorAll('.kurallar-item-baslik');
  
    basliklar.forEach(function(baslik) {
      baslik.addEventListener('click', function() {
        const icerik = this.nextElementSibling;
        const toggle = this.querySelector('.kurallar-item-toggle');
  
        if (icerik.style.display === 'block') {
          icerik.style.display = 'none';
          toggle.style.backgroundColor = '#ccc';
        } else {
          icerik.style.display = 'block';
          toggle.style.backgroundColor = '#ff6f00';
        }
      });
    });
  });
  