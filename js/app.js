﻿// Wait for Cordova to load
//
if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
    document.addEventListener("deviceready", onDeviceReady, false);
} else {
    onDeviceReady();
}

function onDeviceReady() {
    $('#title').text('Device now ready');
}

var track1 = "http://downloads.bbc.co.uk/worldservice/learningenglish/webcast/mp3/betterspeaking/tae_betterspeaking_1_080207.mp3";
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
    setVolume("1.0", trackNum);
});


$(".volumedown").click(function () {
    var trackNum = getTrackNumber($(this));
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
        alert('tried to set the volume to: ' + volume + ' for track:' + track);
        my_media[track].setVolume(volume);
    }
}