// Wait for Cordova to load
//
document.addEventListener("deviceready", onDeviceReady, false);

// Cordova is ready
//
function onDeviceReady() {
    playAudio("http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3");
}

// Audio player
//
var my_media = null;

// Play audio
//
function playAudio(src) {
    // Create Media object from src
    my_media = new Media(src, onSuccess, onError);

    // Play audio
    my_media.play();
}

function onSuccess() {
    console.log("playAudio():Audio Success");
}

// onError Callback
//
function onError(error) {
    alert('code: ' + error.code + '\n' +
                  'message: ' + error.message + '\n');
}

// Set audio volume
//
function setVolume(volume) {
    if (my_media) {
        my_media.setVolume(volume);
    }
}