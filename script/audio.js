const video = document.querySelector(".video-prologue video");
const playPauseButton = document.getElementById("play-pause");
const muteUnmuteButton = document.getElementById("mute-unmute");
const subtitlesButton = document.getElementById("subtitles");
const subtitlesMenu = document.getElementById("language-menu");
const audioTimeline = document.getElementById("audio-timeline");
const currentTimeDisplay = document.getElementById("current-time");
const durationTimeDisplay = document.getElementById("duration-time");

playPauseButton.innerHTML =
  '<img src="/images/play.svg" alt="Play" style="width: 32px; height: 32px; margin-right: 50px;">';
muteUnmuteButton.innerHTML =
  '<img src="/images/sound-on.svg" alt="Sound" style="width: 32px; height: 32px;">';
subtitlesButton.innerHTML =
  '<img src="/images/subtitles.svg" alt="Subtitles" style="width: 32px; height: 32px;">';

playPauseButton.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playPauseButton.innerHTML =
      '<img src="/images/pause.svg" alt="Pause" style="width: 32px; height: 32px; margin-right: 50px;">';
  } else {
    video.pause();
    playPauseButton.innerHTML =
      '<img src="/images/play.svg" alt="Play" style="width: 32px; height: 32px; margin-right: 50px;">';
  }
});

muteUnmuteButton.addEventListener("click", () => {
  video.muted = !video.muted;
  muteUnmuteButton.innerHTML = video.muted
    ? '<img src="/images/sound-off.svg" alt="mute" style="width: 32px; height: 32px;">'
    : '<img src="/images/sound-on.svg" alt="Unmute" style="width: 32px; height: 32px;">';
});

let subtitlesMenuVisible = false;

subtitlesButton.addEventListener("click", () => {
  if (subtitlesMenu) {
    if (!subtitlesMenuVisible) {
      subtitlesMenu.classList.remove("hidden");
      subtitlesMenu.style.display = "block";
      subtitlesMenuVisible = true;
    } else {
      subtitlesMenu.classList.toggle("hidden");
      if (subtitlesMenu.classList.contains("hidden")) {
        subtitlesMenu.style.display = "none";
      } else {
        subtitlesMenu.style.display = "block";
      }
    }
  } else {
    console.error("Subtitles menu element not found");
  }
});

video.addEventListener("loadedmetadata", () => {
  durationTimeDisplay.textContent = formatTime(video.duration);
});

video.addEventListener("timeupdate", () => {
  audioTimeline.value = (video.currentTime / video.duration) * 100;
  currentTimeDisplay.textContent = formatTime(video.currentTime);
  durationTimeDisplay.textContent = formatTime(video.duration || 0);
});

audioTimeline.addEventListener("input", () => {
  video.currentTime = (audioTimeline.value / 100) * video.duration;
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

const back2Button = document.getElementById("leave");

back2Button.addEventListener("click", () => {
  video.currentTime = 0;
  video.pause();
  playPauseButton.innerHTML =
    '<img src="/images/play.svg" alt="Play" style="width: 32px; height: 32px; margin-right: 50px;">';
});
