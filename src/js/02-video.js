import Player from '@Vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.on(
  'timeupdate',
  throttle(currentTime => {
    localStorage.setItem('videoplayer-current-time', currentTime.seconds);
    console.log(currentTime.seconds);
  }, 1000)
);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
