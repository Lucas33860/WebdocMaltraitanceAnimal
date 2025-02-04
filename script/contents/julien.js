const videoElement = document.querySelector(".video-prologue-new video");
const playPauseBtn = document.getElementById("play-pause-new");
const muteUnmuteBtn = document.getElementById("mute-unmute-new");
const subtitlesBtn = document.getElementById("subtitles-new");
const subtitlesMenuElement = document.getElementById("language-menu-new");
const audioTimelineElement = document.getElementById("audio-timeline-new");
const currentTimeDisplayElement = document.getElementById("current-time-new");
const durationTimeDisplayElement = document.getElementById("duration-time-new");

playPauseBtn.innerHTML =
  '<img src="/images/play.svg" alt="Play" style="width: 32px; height: 32px; margin-right: 50px;">';
muteUnmuteBtn.innerHTML =
  '<img src="/images/sound-on.svg" alt="Sound" style="width: 32px; height: 32px;">';
subtitlesBtn.innerHTML =
  '<img src="/images/subtitles.svg" alt="Subtitles" style="width: 32px; height: 32px;">';

playPauseBtn.addEventListener("click", () => {
  if (videoElement.paused) {
    videoElement.play();
    playPauseBtn.innerHTML =
      '<img src="/images/pause.svg" alt="Pause" style="width: 32px; height: 32px; margin-right: 50px;">';
  } else {
    videoElement.pause();
    playPauseBtn.innerHTML =
      '<img src="/images/play.svg" alt="Play" style="width: 32px; height: 32px; margin-right: 50px;">';
  }
});

muteUnmuteBtn.addEventListener("click", () => {
  videoElement.muted = !videoElement.muted;
  muteUnmuteBtn.innerHTML = videoElement.muted
    ? '<img src="/images/sound-off.svg" alt="mute" style="width: 32px; height: 32px;">'
    : '<img src="/images/sound-on.svg" alt="Unmute" style="width: 32px; height: 32px;">';
});

let subtitlesMenuVisible = false;

subtitlesBtn.addEventListener("click", () => {
  if (subtitlesMenuElement) {
    if (!subtitlesMenuVisible) {
      subtitlesMenuElement.classList.remove("hidden");
      subtitlesMenuElement.style.display = "block";
      subtitlesMenuVisible = true;
    } else {
      subtitlesMenuElement.classList.toggle("hidden");
      if (subtitlesMenuElement.classList.contains("hidden")) {
        subtitlesMenuElement.style.display = "none";
      } else {
        subtitlesMenuElement.style.display = "block";
      }
    }
  } else {
    console.error("Subtitles menu element not found");
  }
});

videoElement.addEventListener("loadedmetadata", () => {
  durationTimeDisplayElement.textContent = formatTime(videoElement.duration);
});

videoElement.addEventListener("timeupdate", () => {
  audioTimelineElement.value =
    (videoElement.currentTime / videoElement.duration) * 100;
  currentTimeDisplayElement.textContent = formatTime(videoElement.currentTime);
  durationTimeDisplayElement.textContent = formatTime(
    videoElement.duration || 0
  );
});

audioTimelineElement.addEventListener("input", () => {
  videoElement.currentTime =
    (audioTimelineElement.value / 100) * videoElement.duration;
});

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}

function setSubtitle(trackId) {
  const video = document.querySelector("video");
  const tracks = video.textTracks;
  for (let i = 0; i < tracks.length; i++) {
    tracks[i].mode = tracks[i].id === trackId ? "showing" : "hidden";
  }
}

const back2Btn = document.getElementById("leave");

back2Btn.addEventListener("click", () => {
  videoElement.currentTime = 0;
  videoElement.pause();
  playPauseBtn.innerHTML =
    '<img src="/images/play.svg" alt="Play" style="width: 32px; height: 32px; margin-right: 50px;">';
});
