(function() {

  'use strict';

  var mute = document.getElementById('mute');
  var muteContainer = document.getElementById('mute-container');
  var unmute = document.getElementById('unmute');
  var unmuteContainer = document.getElementById('unmute-container');
  var audio = document.getElementById('audio');

  mute.addEventListener("click", function () {
    muteContainer.className += "audio-on audio-hide";
    unmuteContainer.className = "audio-off";
    audio.muted = true;

  });

  unmute.addEventListener("click", function () {
    unmuteContainer.className += "audio-off audio-hide";
    muteContainer.className = "audio-on";
    audio.muted = false;
  });

}());
