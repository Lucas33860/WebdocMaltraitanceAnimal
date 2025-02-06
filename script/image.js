const textContainer1 = document.getElementById("text-container1");
const textContainer2 = document.getElementById("text-container2");

const textContainer3 = document.getElementById("text-container3");
const textContainer4 = document.getElementById("text-container4");
const textContainer5 = document.getElementById("text-container5");
const textContainer6 = document.getElementById("text-container6");

const audio1 = new Audio("/audio/pattemal/Patte_barre.mp3");
const audio2 = new Audio("/audio/coderural/Code_rurale.mp3");

document.getElementById("next3").onclick = function () {
  audio1.pause();
  audio1.currentTime = 0;
  audio2.pause();
  audio2.currentTime = 0;
};

document.getElementById("next4").onclick = function () {
  audio3.pause();
  audio3.currentTime = 0;
  audio4.pause();
  audio4.currentTime = 0;
  audio5.pause();
  audio5.currentTime = 0;
  audio6.pause();
  audio6.currentTime = 0;
};

document.getElementById("leave3").onclick = function () {
  audio1.pause();
  audio1.currentTime = 0;
  audio2.pause();
  audio2.currentTime = 0;
  audio3.pause();
  audio3.currentTime = 0;
  audio4.pause();
  audio4.currentTime = 0;
  audio5.pause();
  audio5.currentTime = 0;
  audio6.pause();
  audio6.currentTime = 0;
};

document.getElementById("leave4").onclick = function () {
  audio1.pause();
  audio1.currentTime = 0;
  audio2.pause();
  audio2.currentTime = 0;
  audio3.pause();
  audio3.currentTime = 0;
  audio4.pause();
  audio4.currentTime = 0;
  audio5.pause();
  audio5.currentTime = 0;
  audio6.pause();
  audio6.currentTime = 0;
};

const audio3 = new Audio("/audio/1976/Prise1.WAV");
const audio4 = new Audio("/audio/2015/Prise1.WAV");
const audio5 = new Audio("/audio/2023/Prise1.WAV");
const audio6 = new Audio("/audio/patte/Prise1.WAV");

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".picto1").onclick = function () {
    textContainer1.style.display =
      textContainer1.style.display === "block" ? "none" : "block";
    if (textContainer1.style.display === "block") {
      audio1.play();
      textContainer2.style.display = "none";
      audio2.pause();
      audio2.currentTime = 0;
    } else {
      audio1.pause();
      audio1.currentTime = 0;
    }
  };

  document.querySelector(".picto2").onclick = function () {
    textContainer2.style.display =
      textContainer2.style.display === "block" ? "none" : "block";
    if (textContainer2.style.display === "block") {
      audio2.play();
      textContainer1.style.display = "none";
      audio1.pause();
      audio1.currentTime = 0;
    } else {
      audio2.pause();
      audio2.currentTime = 0;
    }
  };
});

document.querySelector(".friseimg1").onclick = function () {
  textContainer3.style.display =
    textContainer3.style.display === "block" ? "none" : "block";
  if (textContainer3.style.display === "block") {
    audio3.play();
    audio4.pause();
    audio5.pause();
    audio6.pause();
    audio4.currentTime = 0;
    audio5.currentTime = 0;
    audio6.currentTime = 0;
    textContainer4.style.display = "none";
    textContainer5.style.display = "none";
    textContainer6.style.display = "none";
  } else {
    audio3.pause();
    audio3.currentTime = 0;
  }
};

document.querySelector(".friseimg2").onclick = function () {
  textContainer4.style.display =
    textContainer4.style.display === "block" ? "none" : "block";
  if (textContainer4.style.display === "block") {
    audio4.play();
    audio3.pause();
    audio5.pause();
    audio6.pause();
    audio3.currentTime = 0;
    audio5.currentTime = 0;
    audio6.currentTime = 0;
    textContainer3.style.display = "none";
    textContainer5.style.display = "none";
    textContainer6.style.display = "none";
  } else {
    audio4.pause();
    audio4.currentTime = 0;
  }
};

document.querySelector(".friseimg3").onclick = function () {
  textContainer5.style.display =
    textContainer5.style.display === "block" ? "none" : "block";
  if (textContainer5.style.display === "block") {
    audio5.play();
    audio3.pause();
    audio4.pause();
    audio6.pause();
    audio3.currentTime = 0;
    audio4.currentTime = 0;
    audio6.currentTime = 0;
    textContainer3.style.display = "none";
    textContainer4.style.display = "none";
    textContainer6.style.display = "none";
  } else {
    audio5.pause();
    audio5.currentTime = 0;
  }
};

document.querySelector(".friseimg4").onclick = function () {
  textContainer6.style.display =
    textContainer6.style.display === "block" ? "none" : "block";
  if (textContainer6.style.display === "block") {
    audio6.play();
    audio3.pause();
    audio4.pause();
    audio5.pause();
    audio3.currentTime = 0;
    audio4.currentTime = 0;
    audio5.currentTime = 0;
    textContainer3.style.display = "none";
    textContainer4.style.display = "none";
    textContainer5.style.display = "none";
  } else {
    audio6.pause();
    audio6.currentTime = 0;
  }
};
