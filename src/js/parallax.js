const parallax = document.querySelector('.parallax');
const front = document.querySelector('.frontLayer');
const back = document.querySelector('.backLayer');
const deviceOrientation = document.querySelector('.requestDeviceOrientation');



parallax.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  const sFrontDesk = 150;
  const sBackDesk = 400;

  front.style.transform = `translate(${x / sFrontDesk}%, ${y / sFrontDesk}%)`;
  back.style.transform = `translate(${x / sBackDesk}%, ${y / sBackDesk}%)`;
  
})

function handleOrientation(event) {
  let x = event.gamma;
  let y = event.beta;

  const horizontal = (x < 0 ? (x *= -4 ) : (x * 4));
  const vertical = (y < 0 ? (y *= -2 ) : (y * 2));

  const sFrontMobile = 75;
  const sBackMobile = 200;
  
  console.log(x + ": en x" +  y + ": en y")

  front.style.transform = `translate(${ horizontal / sFrontMobile}%, ${vertical / sFrontMobile}%)`;
  back.style.transform = `translate(${horizontal  / sBackMobile}%, ${vertical / sBackMobile}%)`;
}

if ( DeviceOrientationEvent != undefined &&  DeviceOrientationEvent.requestPermission === "function") {
  DeviceOrientationEvent.requestPermission().then((permissionState) => {
    if (permissionState === 'granted') {
      window.addEventListener("deviceorientation", handleOrientation);
    }
  }).catch(console.error);
} else if ('DeviceOrientationEvent' in window) {
  window.addEventListener("deviceorientation", handleOrientation);
} else {
  alert("Your browser does not support device orientation.");
}
