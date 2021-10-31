const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const backgroundImage = `src/images/${chosenImage}`;
document.body.style.background = `center / cover no-repeat url(${backgroundImage})`;