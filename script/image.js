document.addEventListener("DOMContentLoaded", function () {
  const textContainer1 = document.getElementById("text-container1");
  const textContainer2 = document.getElementById("text-container2");

  const textContainer3 = document.getElementById("text-container3");
  const textContainer4 = document.getElementById("text-container4");
  const textContainer5 = document.getElementById("text-container5");
  const textContainer6 = document.getElementById("text-container6");

  const audio1 = new Audio("../audio/Prologue-audio.wav");
  const audio2 = new Audio("../audio/Prologue-audio.wav");

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
