"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;
const MAX_STRINGS = 5;

let play = true;
let noCount = 0;
let textCount = 0;
var winWidth = window.innerWidth;
var winHeight = window.innerHeight;
let phrases = ["Really?😳", "Please think more about it😌", "Nice try!😁", "What about this?🤨", "Just click Yes...😭"];

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  resizeYesButton();
  if (play) {
    noCount++;
    if (textCount != MAX_STRINGS) {
      const textELement = document.getElementById("text");
      textELement.textContent = phrases[textCount]
    }
    else {
      const textELement = document.getElementById("text");
      textELement.textContent = phrases[4]
    }
    
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    textCount++;
    
    if (noCount != MAX_IMAGES) {
      changeImage(imageIndex);
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "I love u 💕";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.gif`;
}

function goRandom() {
  noButton.style.top = randomInteger(1, winHeight) + "px";
  noButton.style.left = randomInteger(1, winWidth) + "px";
}


function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

