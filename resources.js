var hangingvideo = document.getElementById("hanging-video");

    // Add event listener for when the video ends
    hangingvideo.addEventListener("ended", function() {
        // Replay the video
        hangingvideo.play();
    });


var televideo = document.getElementById("teleop-video");

    // Add event listener for when the video ends
    televideo.addEventListener("ended", function() {
        // Replay the video
        televideo.play();
    });