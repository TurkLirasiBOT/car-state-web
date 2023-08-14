// Ayarlar formunu seçme
const settingsForm = document.getElementById('settings-form');

// Ayarlar formu gönderildiğinde
settingsForm.addEventListener('submit', function(e) {
  e.preventDefault();

  // Kullanıcı adını al
  const username = document.getElementById('username').value;
  console.log('Kullanıcı Adı:', username);

  // Müzik açma/kapatma durumunu al
  const musicToggle = document.getElementById('music-toggle').checked;
  console.log('Müzik Açık:', musicToggle);
});
