document.getElementById("second-page").style.display = "none";
document.getElementById("third-page").style.display = "none";
document.getElementById("fourth-page").style.display = "none";
document.getElementById("fifth-page").style.display = "none";

document.getElementById("start").addEventListener("click", function () {
  document.getElementById("first-page").style.display = "none";
  document.getElementById("second-page").style.display = "block";
});

document.getElementById("next1").addEventListener("click", function () {
  document.getElementById("second-page").style.display = "none";
  document.getElementById("third-page").style.display = "block";
  var video = document.querySelector(".video-prologue video");
  video.pause();
  video.currentTime = 0;
});

document.getElementById("next2").addEventListener("click", function () {
  document.getElementById("third-page").style.display = "none";
  document.getElementById("fourth-page").style.display = "block";
});

document.getElementById("next3").addEventListener("click", function () {
  document.getElementById("fourth-page").style.display = "none";
  document.getElementById("fifth-page").style.display = "block";
});

document.getElementById("next4").addEventListener("click", function () {
  document.getElementById("fifth-page").style.display = "none";
  window.location.href = "contents.html";
});

document.getElementById("leave").addEventListener("click", function () {
  document.getElementById("first-page").style.display = "block";
  document.getElementById("second-page").style.display = "none";
  document.getElementById("third-page").style.display = "none";
  document.getElementById("fourth-page").style.display = "none";
  document.getElementById("fifth-page").style.display = "none";
});

document.getElementById("leave2").addEventListener("click", function () {
  document.getElementById("first-page").style.display = "block";
  document.getElementById("second-page").style.display = "none";
  document.getElementById("third-page").style.display = "none";
  document.getElementById("fourth-page").style.display = "none";
  document.getElementById("fifth-page").style.display = "none";
});

document.getElementById("leave3").addEventListener("click", function () {
  document.getElementById("first-page").style.display = "block";
  document.getElementById("second-page").style.display = "none";
  document.getElementById("third-page").style.display = "none";
  document.getElementById("fourth-page").style.display = "none";
  document.getElementById("fifth-page").style.display = "none";
});

document.getElementById("leave4").addEventListener("click", function () {
  document.getElementById("first-page").style.display = "block";
  document.getElementById("second-page").style.display = "none";
  document.getElementById("third-page").style.display = "none";
  document.getElementById("fourth-page").style.display = "none";
  document.getElementById("fifth-page").style.display = "none";
});

document.getElementById("subtitles").addEventListener("click", function () {
  const menu = document.getElementById("language-menu");
  menu.style.display = menu.style.display === "none" ? "block" : "none";
});

document.querySelectorAll("#language-menu button").forEach((button) => {
  button.addEventListener("click", function () {
    document.getElementById("language-menu").style.display = "none";
  });
});
