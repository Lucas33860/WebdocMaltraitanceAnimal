document.getElementById("chapter1index1").style.display = "none";
document.getElementById("chapter1index2").style.display = "none";
document.getElementById("videojulien").style.display = "none";
document.getElementById("videodion").style.display = "none";
document.getElementById("chapter2index1").style.display = "none";
document.getElementById("chapter2index2").style.display = "none";
document.getElementById("podcast-animaux1").style.display = "none";
document.getElementById("podcast-sauveur1").style.display = "none";
document.getElementById("podcast-medor").style.display = "none";
document.getElementById("podcast-hermes").style.display = "none";
document.getElementById("podcast-pito").style.display = "none";
document.getElementById("podcast-cocotte").style.display = "none";
document.getElementById("podcast-chatton").style.display = "none";
document.getElementById("temoignage1").style.display = "none";
document.getElementById("temoignage2").style.display = "none";
document.getElementById("chapter3index1").style.display = "none";
document.getElementById("chapter3index2").style.display = "none";
document.getElementById("luttervideo").style.display = "none";
document.getElementById("passionvideo").style.display = "none";
document.getElementById("guerrirvideo").style.display = "none";
document.getElementById("creditindex1").style.display = "none";
document.getElementById("creditindex2").style.display = "none";
document.getElementById("ml").style.display = "none";
document.getElementById("cgu").style.display = "none";

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

addEventListenerIfExists("backchapter2_2", "click", function () {
  document.getElementById("chapter2index2").style.display = "none";
  document.getElementById("contents").style.display = "block";
});

addEventListenerIfExists("backchapter2_3", "click", function () {
  document.getElementById("podcast-animaux1").style.display = "none";
  document.getElementById("chapter2index2").style.display = "block";
});

addEventListenerIfExists("backchapter2_4", "click", function () {
  document.getElementById("podcast-medor").style.display = "none";
  document.getElementById("podcast-animaux1").style.display = "block";
});

addEventListenerIfExists("backchapter2_5", "click", function () {
  document.getElementById("podcast-hermes").style.display = "none";
  document.getElementById("podcast-animaux1").style.display = "block";
});

addEventListenerIfExists("backchapter2_6", "click", function () {
  document.getElementById("podcast-pito").style.display = "none";
  document.getElementById("podcast-animaux1").style.display = "block";
});

addEventListenerIfExists("backchapter2_7", "click", function () {
  document.getElementById("podcast-cocotte").style.display = "none";
  document.getElementById("podcast-animaux1").style.display = "block";
});

addEventListenerIfExists("backchapter2_8", "click", function () {
  document.getElementById("podcast-chatton").style.display = "none";
  document.getElementById("podcast-animaux1").style.display = "block";
});

addEventListenerIfExists("backchapter2_9", "click", function () {
  document.getElementById("podcast-sauveur1").style.display = "none";
  document.getElementById("chapter2index2").style.display = "block";
});

addEventListenerIfExists("backfourrière", "click", function () {
  document.getElementById("temoignage1").style.display = "none";
  document.getElementById("podcast-sauveur1").style.display = "block";
});

addEventListenerIfExists("backasv", "click", function () {
  document.getElementById("temoignage2").style.display = "none";
  document.getElementById("podcast-sauveur1").style.display = "block";
});

addEventListenerIfExists("backchapter3_1", "click", function () {
  document.getElementById("chapter3index1").style.display = "none";
  document.getElementById("contents").style.display = "block";
});

addEventListenerIfExists("backcredit1", "click", function () {
  document.getElementById("creditindex1").style.display = "none";
  document.getElementById("contents").style.display = "block";
});

addEventListenerIfExists("backcredit2", "click", function () {
  document.getElementById("creditindex2").style.display = "none";
  document.getElementById("creditindex1").style.display = "block";
});

addEventListenerIfExists("creditnext1", "click", function () {
  document.getElementById("creditindex1").style.display = "none";
  document.getElementById("creditindex2").style.display = "block";
});

addEventListenerIfExists("backml", "click", function () {
  document.getElementById("ml").style.display = "none";
  document.getElementById("creditindex2").style.display = "block";
});

addEventListenerIfExists("backcgu", "click", function () {
  document.getElementById("cgu").style.display = "none";
  document.getElementById("creditindex2").style.display = "block";
});

addEventListenerIfExists("creditsommaire", "click", function () {
  document.getElementById("creditindex2").style.display = "none";
  document.getElementById("contents").style.display = "block";
});

addEventListenerIfExists("mlbutton", "click", function () {
  document.getElementById("creditindex2").style.display = "none";
  document.getElementById("ml").style.display = "block";
});

addEventListenerIfExists("cgubutton", "click", function () {
  document.getElementById("creditindex2").style.display = "none";
  document.getElementById("cgu").style.display = "block";
});

addEventListenerIfExists("chapter1next1", "click", function () {
  document.getElementById("chapter1index1").style.display = "none";
  document.getElementById("chapter1index2").style.display = "block";
});

addEventListenerIfExists("chapter1next2", "click", function () {
  document.getElementById("chapter1index2").style.display = "none";
  document.getElementById("chapter2index1").style.display = "block";
});

addEventListenerIfExists("chapter2next1", "click", function () {
  document.getElementById("chapter2index1").style.display = "none";
  document.getElementById("chapter2index2").style.display = "block";
});

addEventListenerIfExists("chapter2nextchapitre3", "click", function () {
  document.getElementById("podcast-animaux1").style.display = "none";
  document.getElementById("chapter3index1").style.display = "block";
});

addEventListenerIfExists("chapter2next2chapitre3", "click", function () {
  document.getElementById("podcast-sauveur1").style.display = "none";
  document.getElementById("chapter3index1").style.display = "block";
});

addEventListenerIfExists("dion", "click", function () {
  document.getElementById("chapter1index2").style.display = "none";
  document.getElementById("videodion").style.display = "block";
});

addEventListenerIfExists("julien", "click", function () {
  document.getElementById("chapter1index2").style.display = "none";
  document.getElementById("videojulien").style.display = "block";
});

addEventListenerIfExists("leavejulien", "click", function () {
  document.getElementById("videojulien").style.display = "none";
  document.getElementById("chapter1index2").style.display = "block";
});

addEventListenerIfExists("leavedion", "click", function () {
  document.getElementById("videodion").style.display = "none";
  document.getElementById("chapter1index2").style.display = "block";
});

addEventListenerIfExists("animaux", "click", function () {
  document.getElementById("chapter2index2").style.display = "none";
  document.getElementById("podcast-animaux1").style.display = "block";
});

addEventListenerIfExists("sauveur", "click", function () {
  document.getElementById("chapter2index2").style.display = "none";
  document.getElementById("podcast-sauveur1").style.display = "block";
});

addEventListenerIfExists("medor", "click", function () {
  document.getElementById("podcast-animaux1").style.display = "none";
  document.getElementById("podcast-medor").style.display = "block";
});

addEventListenerIfExists("hermes", "click", function () {
  document.getElementById("podcast-animaux1").style.display = "none";
  document.getElementById("podcast-hermes").style.display = "block";
});

addEventListenerIfExists("pito", "click", function () {
  document.getElementById("podcast-animaux1").style.display = "none";
  document.getElementById("podcast-pito").style.display = "block";
});

addEventListenerIfExists("cocotte", "click", function () {
  document.getElementById("podcast-animaux1").style.display = "none";
  document.getElementById("podcast-cocotte").style.display = "block";
});

addEventListenerIfExists("chatton", "click", function () {
  document.getElementById("podcast-animaux1").style.display = "none";
  document.getElementById("podcast-chatton").style.display = "block";
});

addEventListenerIfExists("temoin1", "click", function () {
  document.getElementById("podcast-sauveur1").style.display = "none";
  document.getElementById("temoignage1").style.display = "block";
});

addEventListenerIfExists("temoin2", "click", function () {
  document.getElementById("podcast-sauveur1").style.display = "none";
  document.getElementById("temoignage2").style.display = "block";
});

//CHAPITRE 3 //

addEventListenerIfExists("chapter3next1", "click", function () {
  document.getElementById("chapter3index1").style.display = "none";
  document.getElementById("chapter3index2").style.display = "block";
});

addEventListenerIfExists("chapter3next2", "click", function () {
  document.getElementById("chapter3index2").style.display = "none";
  document.getElementById("creditindex1").style.display = "block";
});

addEventListenerIfExists("lutter", "click", function () {
  document.getElementById("chapter3index2").style.display = "none";
  document.getElementById("luttervideo").style.display = "block";
});

addEventListenerIfExists("passion", "click", function () {
  document.getElementById("chapter3index2").style.display = "none";
  document.getElementById("passionvideo").style.display = "block";
});

addEventListenerIfExists("guerrir", "click", function () {
  document.getElementById("chapter3index2").style.display = "none";
  document.getElementById("guerrirvideo").style.display = "block";
});

addEventListenerIfExists("backlutter", "click", function () {
  document.getElementById("luttervideo").style.display = "none";
  document.getElementById("chapter3index2").style.display = "block";
});

addEventListenerIfExists("backpassion", "click", function () {
  document.getElementById("passionvideo").style.display = "none";
  document.getElementById("chapter3index2").style.display = "block";
});

addEventListenerIfExists("backguerrir", "click", function () {
  document.getElementById("guerrirvideo").style.display = "none";
  document.getElementById("chapter3index2").style.display = "block";
});

addEventListenerIfExists("backchapter3_2", "click", function () {
  document.getElementById("chapter3index2").style.display = "none";
  document.getElementById("contents").style.display = "block";
});

// Podcast intern ancrage

document.querySelectorAll(".hermes-podcast").forEach((element) => {
  element.addEventListener("click", function () {
    document
      .querySelectorAll(
        ".podcast-pito, .podcast-cocotte, .podcast-chatton, .podcast-medor"
      )
      .forEach((el) => {
        el.style.display = "none";
        const audio = el.querySelector("audio");
        if (audio) {
          audio.pause();
          audio.currentTime = 0;
          document.getElementById("start-biboule").src = "/images/play.svg";
        }
      });
    document.querySelector(".podcast-hermes").style.display = "block";
  });
});

document.querySelectorAll(".pito-podcast").forEach((element) => {
  element.addEventListener("click", function () {
    document
      .querySelectorAll(
        ".podcast-hermes, .podcast-cocotte, .podcast-chatton, .podcast-medor"
      )
      .forEach((el) => {
        el.style.display = "none";
        const audio = el.querySelector("audio");
        if (audio) {
          audio.pause();
          audio.currentTime = 0;
          document.getElementById("start-pito").src = "/images/play.svg";
        }
      });
    document.querySelector(".podcast-pito").style.display = "block";
  });
});

document.querySelectorAll(".cocotte-podcast").forEach((element) => {
  element.addEventListener("click", function () {
    document
      .querySelectorAll(
        ".podcast-hermes, .podcast-pito, .podcast-chatton, .podcast-medor"
      )
      .forEach((el) => {
        el.style.display = "none";
        const audio = el.querySelector("audio");
        if (audio) {
          audio.pause();
          audio.currentTime = 0;
          document.getElementById("start-cocotte").src = "/images/play.svg";
        }
      });
    document.querySelector(".podcast-cocotte").style.display = "block";
  });
});

document.querySelectorAll(".chatton-podcast").forEach((element) => {
  element.addEventListener("click", function () {
    document
      .querySelectorAll(
        ".podcast-hermes, .podcast-pito, .podcast-cocotte, .podcast-medor"
      )
      .forEach((el) => {
        el.style.display = "none";
        const audio = el.querySelector("audio");
        if (audio) {
          audio.pause();
          audio.currentTime = 0;
          document.getElementById("start-chatton").src = "/images/play.svg";
        }
      });
    document.querySelector(".podcast-chatton").style.display = "block";
  });
});

document.querySelectorAll(".medor-podcast").forEach((element) => {
  element.addEventListener("click", function () {
    document
      .querySelectorAll(
        ".podcast-hermes, .podcast-pito, .podcast-cocotte, .podcast-chatton"
      )
      .forEach((el) => {
        el.style.display = "none";
        const audio = el.querySelector("audio");
        if (audio) {
          audio.pause();
          audio.currentTime = 0;
          document.getElementById("start-medor").src = "/images/play.svg";
        }
      });
    document.querySelector(".podcast-medor").style.display = "block";
  });
});
