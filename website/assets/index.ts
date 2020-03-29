import MediaPlayer from '@hecto932/platzi-mediaplayer';
import AutoPlay from '@hecto932/platzi-mediaplayer/lib/plugins/AutoPlay';
import AutoPause from '@hecto932/platzi-mediaplayer/lib/plugins/AutoPause';
import Ads from '@hecto932/platzi-mediaplayer/lib/plugins/Ads';

const video = document.querySelector('video');
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause(), new Ads()]
});

const button = document.querySelector('button');
button.onclick = () => player.togglePlay();

const playButton: HTMLElement = document.querySelector('#playButton');
playButton.onclick = () => player.togglePlay();

const muteButton: HTMLElement = document.querySelector('#muteButton');
muteButton.onclick = () => {
  if (player.media.muted) {
    player.unmute();
  } else {
    player.mute();
  }
};

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(err => {
    console.error(err.message);
  });
}
