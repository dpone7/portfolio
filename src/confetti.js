'use-strict';

const contactButton = document.querySelector('.home__contact__button');
const jsConfetti = new JSConfetti();
contactButton.addEventListener('click', () => {
  let canvas = document.createElement('canvas');
  let container = document.querySelector('.home__contact');
  container.appendChild(canvas);

  jsConfetti
    .addConfetti({
      confettiRadius: 3,
      confettiNumber: 500,
    })
    .then(() => container.removeChild(canvas));
});
