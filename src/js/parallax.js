const parallax = document.querySelector('.parallax');
const front = document.querySelector('.frontLayer');
const back = document.querySelector('.backLayer');

const sFront = 150;
const sBack = 400;

parallax.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  front.style.transform = `translate(${x / sFront}%, ${y / sFront}%)`;
  back.style.transform = `translate(${x / sBack}%, ${y / sBack}%)`;
})