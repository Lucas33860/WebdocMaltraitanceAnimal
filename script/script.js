document.getElementById("second-page").style.display = "none";
document.getElementById("third-page").style.display = "none";
document.getElementById("fourth-page").style.display = "none";

document.getElementById("start").addEventListener("click", function () {
  document.getElementById("first-page").style.display = "none";
  document.getElementById("second-page").style.display = "block";
});

document.getElementById("next1").addEventListener("click", function () {
  document.getElementById("second-page").style.display = "none";
  document.getElementById("third-page").style.display = "block";
});

document.getElementById("next2").addEventListener("click", function () {
  document.getElementById("third-page").style.display = "none";
  document.getElementById("fourth-page").style.display = "block";
});

document.getElementById("leave").addEventListener("click", function () {
  document.getElementById("first-page").style.display = "block";
  document.getElementById("second-page").style.display = "none";
  document.getElementById("third-page").style.display = "none";
  document.getElementById("fourth-page").style.display = "none";
});

document.getElementById("leave2").addEventListener("click", function () {
  document.getElementById("first-page").style.display = "block";
  document.getElementById("second-page").style.display = "none";
  document.getElementById("third-page").style.display = "none";
  document.getElementById("fourth-page").style.display = "none";
});

document.getElementById("leave3").addEventListener("click", function () {
  document.getElementById("first-page").style.display = "block";
  document.getElementById("second-page").style.display = "none";
  document.getElementById("third-page").style.display = "none";
  document.getElementById("fourth-page").style.display = "none";
});
