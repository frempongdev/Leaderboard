import backgroundVideo from '../videos/background.mp4';

const background = () => {
  const video = document.createElement('video');
  video.src = backgroundVideo;
  video.autoplay = true;
  video.muted = true;
  video.loop = true;
  video.style.position = 'fixed';
  video.style.top = '0';
  video.style.left = '0';
  video.style.width = '100%';
  video.style.height = '100%';
  video.style.objectFit = 'cover';

  const container = document.getElementById('video-container');
  container.appendChild(video);
};

export default background;