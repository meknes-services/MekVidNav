// app.js
document.addEventListener('DOMContentLoaded', () => {
    const videoContainer = document.getElementById('video-container');
    const videoElement = document.getElementById('main-video');
    const videoSources = {
        left: 'path/to/left/video.mp4',
        forward: 'path/to/forward/video.mp4',
        right: 'path/to/right/video.mp4'
    };

    document.querySelectorAll('.gallery-item img').forEach(item => {
        item.addEventListener('click', () => {
            const videoSrc = item.getAttribute('data-video');
            videoElement.src = videoSrc;
            videoContainer.style.display = 'block';
            videoElement.play();
        });
    });

    document.getElementById('left').addEventListener('click', () => {
        changeVideo('left');
    });

    document.getElementById('forward').addEventListener('click', () => {
        changeVideo('forward');
    });

    document.getElementById('right').addEventListener('click', () => {
        changeVideo('right');
    });

    function changeVideo(direction) {
        videoElement.src = videoSources[direction];
        videoElement.play();
    }
});
