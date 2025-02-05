// Medor Podcast

document.getElementById("start-medor").addEventListener("click", function () {
  var audio = document.getElementById("audiomedor");
  if (audio.paused) {
    audio.play();
    document.getElementById("start-medor").src = "/images/pause.svg";
    document.getElementById("start-medor").style.width = "72px";
    document.getElementById("start-medor").style.height = "72px";
  } else {
    audio.pause();
    document.getElementById("start-medor").src = "/images/play.svg";
  }
});

document
  .getElementById("backchapter2_4")
  .addEventListener("click", function () {
    var audios = document.getElementsByTagName("audio");
    for (var i = 0; i < audios.length; i++) {
      audios[i].pause();
      audios[i].currentTime = 0;
      document.getElementById("start-medor").src = "/images/play.svg";
    }
  });

// Biboule Podcast

document.getElementById("start-biboule").addEventListener("click", function () {
  var audio = document.getElementById("audiobiboule");
  if (audio.paused) {
    audio.play();
    document.getElementById("start-biboule").src = "/images/pause.svg";
    document.getElementById("start-biboule").style.width = "72px";
    document.getElementById("start-biboule").style.height = "72px";
  } else {
    audio.pause();
    document.getElementById("start-biboule").src = "/images/play.svg";
  }
});

document
  .getElementById("backchapter2_5")
  .addEventListener("click", function () {
    var audios = document.getElementsByTagName("audio");
    for (var i = 0; i < audios.length; i++) {
      audios[i].pause();
      audios[i].currentTime = 0;
      document.getElementById("start-biboule").src = "/images/play.svg";
    }
  });

// Podcast Pito

document.getElementById("start-pito").addEventListener("click", function () {
  var audio = document.getElementById("audiopito");
  if (audio.paused) {
    audio.play();
    document.getElementById("start-pito").src = "/images/pause.svg";
    document.getElementById("start-pito").style.width = "72px";
    document.getElementById("start-pito").style.height = "72px";
  } else {
    audio.pause();
    document.getElementById("start-pito").src = "/images/play.svg";
  }
});

document
  .getElementById("backchapter2_6")
  .addEventListener("click", function () {
    var audios = document.getElementsByTagName("audio");
    for (var i = 0; i < audios.length; i++) {
      audios[i].pause();
      audios[i].currentTime = 0;
      document.getElementById("start-pito").src = "/images/play.svg";
    }
  });

// PODCAST COCOTTE

document.getElementById("start-cocotte").addEventListener("click", function () {
  var audio = document.getElementById("audiococotte");
  if (audio.paused) {
    audio.play();
    document.getElementById("start-cocotte").src = "/images/pause.svg";
    document.getElementById("start-cocotte").style.width = "72px";
    document.getElementById("start-cocotte").style.height = "72px";
  } else {
    audio.pause();
    document.getElementById("start-cocotte").src = "/images/play.svg";
  }
});

document
  .getElementById("backchapter2_7")
  .addEventListener("click", function () {
    var audios = document.getElementsByTagName("audio");
    for (var i = 0; i < audios.length; i++) {
      audios[i].pause();
      audios[i].currentTime = 0;
      document.getElementById("start-cocotte").src = "/images/play.svg";
    }
  });

// PODCAST CHATTON

document.getElementById("start-chatton").addEventListener("click", function () {
  var audio = document.getElementById("audiochatton");
  if (audio.paused) {
    audio.play();
    document.getElementById("start-chatton").src = "/images/pause.svg";
    document.getElementById("start-chatton").style.width = "72px";
    document.getElementById("start-chatton").style.height = "72px";
  } else {
    audio.pause();
    document.getElementById("start-chatton").src = "/images/play.svg";
  }
});

document
  .getElementById("backchapter2_8")
  .addEventListener("click", function () {
    var audios = document.getElementsByTagName("audio");
    for (var i = 0; i < audios.length; i++) {
      audios[i].pause();
      audios[i].currentTime = 0;
      document.getElementById("start-chatton").src = "/images/play.svg";
    }
  });
