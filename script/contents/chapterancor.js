document.getElementById("chapter1index1").style.display = "none";
document.getElementById("chapter1index2").style.display = "none";
document.getElementById("videojulien").style.display = "none";

document.getElementById("videodion").style.display = "none";

const addEventListenerIfExists = (id, event, handler) => {
  const element = document.getElementById(id);
  if (element) {
    element.addEventListener(event, handler);
  }
};

addEventListenerIfExists("chapter1start", "click", function () {
  document.getElementById("chapter1index1").style.display = "block";
  document.getElementById("contents").style.display = "none";
});

addEventListenerIfExists("chapter2start", "click", function () {
  document.getElementById("chapter2index1").style.display = "block";
  document.getElementById("contents").style.display = "none";
});

addEventListenerIfExists("chapter3start", "click", function () {
  document.getElementById("chapter3index1").style.display = "block";
  document.getElementById("contents").style.display = "none";
});

addEventListenerIfExists("chapter4start", "click", function () {
  document.getElementById("chapter4index1").style.display = "block";
  document.getElementById("contents").style.display = "none";
});

addEventListenerIfExists("creditstart", "click", function () {
  document.getElementById("creditindex1").style.display = "block";
  document.getElementById("contents").style.display = "none";
});

addEventListenerIfExists("backchapter1_1", "click", function () {
  document.getElementById("chapter1index1").style.display = "none";
  document.getElementById("contents").style.display = "block";
});

addEventListenerIfExists("backchapter1_2", "click", function () {
  document.getElementById("chapter1index2").style.display = "none";
  document.getElementById("contents").style.display = "block";
});

addEventListenerIfExists("backchapter1_3", "click", function () {
  document.getElementById("videodion").style.display = "none";
  document.getElementById("chapter1index2").style.display = "block";
});

addEventListenerIfExists("backchapter1_4", "click", function () {
  document.getElementById("videojulien").style.display = "none";
  document.getElementById("chapter1index2").style.display = "block";
});

addEventListenerIfExists("backchapter2_1", "click", function () {
  document.getElementById("chapter2index1").style.display = "none";
  document.getElementById("contents").style.display = "block";
});

addEventListenerIfExists("backchapter3_1", "click", function () {
  document.getElementById("chapter3index1").style.display = "none";
  document.getElementById("contents").style.display = "block";
});

addEventListenerIfExists("backchapter4_1", "click", function () {
  document.getElementById("chapter4index1").style.display = "none";
  document.getElementById("contents").style.display = "block";
});

addEventListenerIfExists("backcredit1", "click", function () {
  document.getElementById("creditindex1").style.display = "none";
  document.getElementById("contents").style.display = "block";
});

addEventListenerIfExists("chapter1next1", "click", function () {
  document.getElementById("chapter1index1").style.display = "none";
  document.getElementById("chapter1index2").style.display = "block";
});

addEventListenerIfExists("chapter1next2", "click", function () {
  document.getElementById("chapter1index2").style.display = "none";
  document.getElementById("chapter2index1").style.display = "block";
});

addEventListenerIfExists("dion", "click", function () {
  document.getElementById("chapter1index2").style.display = "none";
  document.getElementById("videodion").style.display = "block";
});

addEventListenerIfExists("julien", "click", function () {
  document.getElementById("chapter1index2").style.display = "none";
  document.getElementById("videojulien").style.display = "block";
});
