const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled ");
const toggle = player.querySelector(".toggle");
const toggle2 = player.querySelector(".toggle2");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

// Main functions
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }

  // Second way, alternative to togglePlay()
  // const method = video.paused ? "play" : "pause";
  // video[method]();
}

function togglePlayKey(event) {
  let key = event.which || event.keyCode;
  if (key === 32) {
    event.preventDefault();
    video.paused ? video.play() : video.pause();
  }
}

function changeButton() {
  const icon = this.paused ? "▶" : "❚❚";
  toggle.textContent = icon;
}

function skipButton() {
  console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function openFullscreen() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) {
    /* Safari */
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {
    /* IE11 */
    video.msRequestFullscreen();
  }
}

function openFullscreenKey(event) {
  let key = event.which || event.keyCode;
  if (key === 70) {
    event.preventDefault();
    if (video.requestFullscreen) {
      video.requestFullscreen();
    }
  }
}

function MuteSoundEvent(event) {
  let key = event.which || event.keyCode;
  if (key === 77) {
    event.preventDefault();
    video.muted = true;
  }
}

// Event listeners with callback functions
document.addEventListener("keydown", togglePlayKey);
document.addEventListener("keydown", openFullscreenKey);
document.addEventListener("keydown", MuteSoundEvent);

video.addEventListener("click", togglePlay);
video.addEventListener("play", changeButton);
video.addEventListener("pause", changeButton);
video.addEventListener("timeupdate", handleProgress);

toggle.addEventListener("click", togglePlay);
skipButtons.forEach((button) => button.addEventListener("click", skipButton));
ranges.forEach((range) => range.addEventListener("change", handleRangeUpdate));
ranges.forEach((range) =>
  range.addEventListener("mousemove", handleRangeUpdate)
);

let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));
