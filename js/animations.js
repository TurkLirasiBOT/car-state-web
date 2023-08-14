// DOM elementlerini seçme
const h1Element = document.querySelector('h1');
const yuklemelerListesiElement = document.querySelector('#yuklemeler-listesi');
const yuklemeYokMesajiElement = document.querySelector('#yukleme-yok-mesaji');

window.addEventListener('load', () => {
    h1Element.classList.add('fade-in');
    yuklemelerListesiElement.classList.add('fade-in-delayed');
    yuklemeYokMesajiElement.classList.add('fade-in-delayed');
});
