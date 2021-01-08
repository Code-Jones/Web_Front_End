let player;
const videoId = 'QIc-9UuLSmg';
const startSeconds = 86;
const endSeconds = 210;
const playerConfig = {
    height: '250',
    width: '100%',
    videoId: videoId,
    playerVars: {
        autoplay: 1,
        controls: 0,
        showinfo: 0,
        modestbranding: 1,
        fs: 1,
        cc_load_policy: 0,
        iv_load_policy: 3,
        start: startSeconds,
        end: endSeconds,
        autohide: 0,
        mute : 1
    },
    events: {
        'onStateChange': onStateChange,
        onReady: function (e) {
            // e.target.unMute();
        }
    }
};

function onYouTubePlayerAPIReady() {
    player = new YT.Player('myvideo', playerConfig);
}

function onStateChange(state) {
    if (state.data === YT.PlayerState.ENDED) {
        player.loadVideoById({
            videoId: videoId,
            autoplay: 1,
            startSeconds: startSeconds,
            endSeconds: endSeconds

        });
    }
}


