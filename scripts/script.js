function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const dynamicText = document.querySelector(".typewriter-text");

const text = [
  "Software Engineer",
  "Developer",
  "Designer",
  "Game Enthusiast",
];

let speed = 100;

const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let characterIndex = 0;

function typeWriter() {
  if (characterIndex < text[textIndex].length) {
    textElements.innerHTML += text[textIndex].charAt(characterIndex);
    characterIndex++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(eraseText, 3000);
  }
}

function eraseText() {
  if (textElements.innerHTML.length > 0) {
    textElements.innerHTML = textElements.innerHTML.slice(0, -1);
    setTimeout(eraseText, 50);
  } else {
    textIndex = (textIndex + 1) % text.length;
    characterIndex = 0;
    setTimeout(typeWriter, 500);
  }
}

window.onload = typeWriter;

document.addEventListener("DOMContentLoaded", function () {
  const floaties = document.querySelectorAll(".floaty");

  floaties.forEach((f) => {
    // random horizontal position
    f.style.left = Math.random() * 100 + "vw";

    // random animation duration (speed)
    f.style.animationDuration = 10 + Math.random() * 10 + "s";

    // random animation delay (stagger start)
    f.style.animationDelay = Math.random() * 5 + "s";

    // random size (optional, for more "depth" feeling)
    const size = 10 + Math.random() * 20; // 10px to 30px
    f.style.width = size + "px";
  });
});