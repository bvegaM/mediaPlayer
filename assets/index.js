
import MediaPlayer from './mediaPlayer.js';
import AutoPlay from './plugins/autoPlay.js';
import AutoPause from './plugins/AutoPause.js';

const video = document.querySelector("video");
const buttonPlayer = document.querySelector("#playbutton");
const buttonMute = document.querySelector("#mutebutton");
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay(),new AutoPause()] });
buttonPlayer.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/assets/sw.js').catch(error=>{
        console.log(error.message)
    });
}