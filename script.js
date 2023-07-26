 const videoPlayer = document.getElementById('videoPlayer');
 const playPauseButton = document.querySelector('.play-pause-button');
 let isPaused = false;
 let wasPausedBeforeBlur = false;

 videoPlayer.addEventListener('ended', () => {
 	videoPlayer.currentTime = 0;
 	videoPlayer.pause();
 	playPauseButton.classList.add('video-ended');
 });

 playPauseButton.addEventListener('click', () => {
 	if (videoPlayer.paused) {
 		videoPlayer.play();
 		playPauseButton.parentElement.classList.add('video-playing');
 		playPauseButton.classList.remove('video-ended');
 	} else {
 		videoPlayer.pause();
 		playPauseButton.parentElement.classList.remove('video-playing');
 	}
 });

 function handleVisibilityChange() {
 	if (document.hidden) {
 		wasPausedBeforeBlur = videoPlayer.paused;
 		videoPlayer.pause();
 		isPaused = true;
 	} else if (isPaused) {
 		if (!wasPausedBeforeBlur) {
 			videoPlayer.play();
 		}
 		isPaused = false;
 	}
 }

 document.addEventListener('visibilitychange', handleVisibilityChange);

 window.addEventListener('beforeunload', () => {
 	if (!videoPlayer.paused) {
 		videoPlayer.pause();
 	}
 });
