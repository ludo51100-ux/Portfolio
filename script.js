// Faire que les images bougent et se réduisent au survol
let images = document.querySelectorAll('.element');

images.forEach(element => {
  element.addEventListener('mouseover', () => {
    element.style.transform = 'scale(0.9) rotate(-3deg)';
    element.style.transition = 'transform 0.3s ease';
  });

  element.addEventListener('mouseout', () => {
    element.style.transform = 'scale(1) rotate(0deg)';
    element.style.transition = 'transform 0.3s ease';
  });
});

// Sélectionne les éléments du popup
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');
const closeBtn = document.getElementById('close');

// Quand on clique sur une image, on l'affiche en grand
images.forEach(element => {
  element.addEventListener('click', () => {
    popup.style.display = 'flex';
    popupImg.src = element.src;
  });
});

// Fermer le popup en cliquant sur la croix
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
  popupImg.src = '';
});

// Fermer le popup en cliquant en dehors de l'image
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
    popupImg.src = '';
  }
});