const audio = document.getElementById("audio");
const playPauseButton = document.getElementById("play-pause");
const muteUnmuteButton = document.getElementById("mute-unmute");
const subtitlesButton = document.getElementById("subtitles");
const subtitlesMenu = document.getElementById("subtitles-menu");
const audioTimeline = document.getElementById("audio-timeline");
const currentTimeDisplay = document.getElementById("current-time");
const durationTimeDisplay = document.getElementById("duration-time");
const video = document.querySelector(".video-prologue video");

playPauseButton.innerHTML =
  '<img src="/images/play.svg" alt="Play" style="width: 32px; height: 32px; margin-right: 50px;">';
muteUnmuteButton.innerHTML =
  '<img src="/images/sound-on.svg" alt="Sound" style="width: 32px; height: 32px;">';
subtitlesButton.innerHTML =
  '<img src="/images/subtitles.svg" alt="Subtitles" style="width: 32px; height: 32px;">';

playPauseButton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    video.play();
    playPauseButton.innerHTML =
      '<img src="/images/pause.svg" alt="Pause" style="width: 32px; height: 32px; margin-right: 50px;">';
  } else {
    audio.pause();
    video.pause();
    playPauseButton.innerHTML =
      '<img src="/images/play.svg" alt="Play" style="width: 32px; height: 32px; margin-right: 50px;">';
  }
});

muteUnmuteButton.addEventListener("click", () => {
  audio.muted = !audio.muted;
  muteUnmuteButton.innerHTML = audio.muted
    ? '<img src="/images/sound-off.svg" alt="mute" style="width: 32px; height: 32px;">'
    : '<img src="/images/sound-on.svg" alt="Unmute" style="width: 32px; height: 32px;">';
});

subtitlesButton.addEventListener("click", () => {
  subtitlesMenu.classList.toggle("hidden");
});

audio.addEventListener("loadedmetadata", () => {
  durationTimeDisplay.textContent = formatTime(audio.duration);
});

audio.addEventListener("timeupdate", () => {
  audioTimeline.value = (audio.currentTime / audio.duration) * 100;
  currentTimeDisplay.textContent = formatTime(audio.currentTime);
  durationTimeDisplay.textContent = formatTime(audio.duration || 0);
});

audioTimeline.addEventListener("input", () => {
  audio.currentTime = (audioTimeline.value / 100) * audio.duration;
});

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}
