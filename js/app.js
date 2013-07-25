// Wait for Cordova to load
//
//document.addEventListener("deviceready", onDeviceReady, false);

var track1 = "http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3";
var track2 = "http://audio.ibeat.org/content/enoe/enoe_-_Student_Beat.mp3";

function getTrackNumber(elm) {
    return elm.parents('ul').data('track');
}

$("a[href*=#]").click(function (e) {
    e.preventDefault();
});  

$(".start").click(function () {
    var trackNum = getTrackNumber($(this));

    if (trackNum === 1) {
        playAudio(track1, 1);
    }
    else {
        playAudio(track2, 2);
    }
});

$(".stop").click(function () {
    var trackNum = getTrackNumber($(this));
    stopAudio(trackNum);
});

$(".volumeup").click(function () {
    var trackNum = getTrackNumber($(this));
    setVolume("0.8", trackNum);
});


$(".volumedown").click(function () {
    setVolume("0.2", trackNum);
});

//function onDeviceReady() {
//    playAudio("http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3");
//}

// Audio player
//
var my_media = {};

// Play audio
//
function playAudio(src, track) {
    // Create Media object from src
    my_media[track] = new Media(src, onSuccess, onError);

    // Play audio
    my_media[track].play();

    // Mute volume after 5 seconds
    setTimeout(function () {
        my_media[track].setVolume('0.0');
    }, 5000);
}

function stopAudio(track) {
    if (my_media[track]) {
        my_media[track].stop();
    }
    my_media[track] = null;
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
function setVolume(volume, track) {
    if (my_media[track]) {
        my_media[track].setVolume(volume);
    }
}