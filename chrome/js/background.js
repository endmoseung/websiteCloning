const images = ["0.jpeg","1.jpeg","2.jpeg","3.jpeg"];

const chosenImage = images[Math.floor(Math.random()*(images.length))];

const backImage = document.querySelector("body");

backImage.style.backgroundImage = `url(img/${chosenImage})`;
