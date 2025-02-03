document.getElementById("chapter1index1").style.display = "none";

document.getElementById("chapter1start").addEventListener("click", function () {
  document.getElementById("chapter1index1").style.display = "block";
  document.getElementById("contents").style.display = "none";
});

document.getElementById("chapter2start").addEventListener("click", function () {
  document.getElementById("chapter2index1").style.display = "block";
  document.getElementById("contents").style.display = "none";
});

document.getElementById("chapter3start").addEventListener("click", function () {
  document.getElementById("chapter3index1").style.display = "block";
  document.getElementById("contents").style.display = "none";
});

document.getElementById("chapter4start").addEventListener("click", function () {
  document.getElementById("chapter4index1").style.display = "block";
  document.getElementById("contents").style.display = "none";
});

document.getElementById("creditstart").addEventListener("click", function () {
  document.getElementById("creditindex1").style.display = "block";
  document.getElementById("contents").style.display = "none";
});

document
  .getElementById("backchapter1_1")
  .addEventListener("click", function () {
    document.getElementById("chapter1index1").style.display = "none";
    document.getElementById("contents").style.display = "block";
  });

document
  .getElementById("backchapter2_1")
  .addEventListener("click", function () {
    document.getElementById("chapter2index1").style.display = "none";
    document.getElementById("contents").style.display = "block";
  });

document
  .getElementById("backchapter3_1")
  .addEventListener("click", function () {
    document.getElementById("chapter3index1").style.display = "none";
    document.getElementById("contents").style.display = "block";
  });

document
  .getElementById("backchapter4_1")
  .addEventListener("click", function () {
    document.getElementById("chapter4index1").style.display = "none";
    document.getElementById("contents").style.display = "block";
  });

document.getElementById("backcredit1").addEventListener("click", function () {
  document.getElementById("creditindex1").style.display = "none";
  document.getElementById("contents").style.display = "block";
});
