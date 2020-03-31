// Create and append audio element to DOM with jQuery
$(function() {
  var audioElement = $("#audio"),
    href = audioElement.children("a").attr("href");
  $.template("audioTemplate", '<audio src="${src}" controls>');
  if (Modernizr.audio.mp3) {
    audioElement.empty();
    $.tmpl("audioTemplate", { src: href }).appendTo(audioElement);
  }
});

// Playback a file using Web Audio API

const ctx = new AudioContext();
let audio;

fetch("frogs.wav")
  .then(data => data.arrayBuffer())
  .then(arrayBuffer => ctx.decodeAudioData(arrayBuffer))
  .then(decodedAudio => {
    audio = decodedAudio;
  });

function playback() {
  console.log("Playback called...");
  const playSound = ctx.createBufferSource();
  playSound.buffer = audio;
  playSound.connect(ctx.destination);
  playSound.start(ctx.currentTime);
}

window.addEventListener("mousedown", playback);
