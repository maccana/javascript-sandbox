$(function() {
  var audioElement = $("#audio"),
    href = audioElement.children("a").attr("href");
  $.template("audioTemplate", '<audio src="${src}" controls>');
  if (Modernizr.audio.mp3) {
    audioElement.empty();
    $.tmpl("audioTemplate", { src: href }).appendTo(audioElement);
  }
});
