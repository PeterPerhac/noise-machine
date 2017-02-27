function loadSfx(soundName){
    return new Howl({ src: ['sounds/'+soundName+'.mp3', 'sounds/'+soundName+'.ogg','sounds/'+soundName+'.wav']});
}
var noiseMachine = {
    noises : {
        laser: loadSfx('laser'),
        drum1: loadSfx('drum1'),
        drum2: loadSfx('drum2'),
        drum2: loadSfx('drum2'),
        ding: loadSfx('ding'),
        dong: loadSfx('dong'),
        doorbell: loadSfx('doorbell'),
        mobile: loadSfx('mobile'),
        scratch: loadSfx('scratch'),
        shotgun1: loadSfx('shotgun-reload'),
        shotgun2: loadSfx('shotgun-fire'),
        loop: loadSfx('loop')
    },
    noiseMappings : { '0' : 'laser', '1' : 'drum1', '2' : 'drum2', '3' : 'loop', '4' : 'ding', '5' : 'dong', '6' : 'doorbell', '7' : 'mobile', '8' : 'scratch', 'q' : 'shotgun1', 'w' : 'shotgun2' },
    playNoise: function(noise){
        var noise =  noiseMachine.noises[noise]
        if (noise) noise.play();
    },
    keyHandler: function (e) {
        var letterPressed = String.fromCharCode(e.keyCode)
        noiseMachine.playNoise(noiseMachine.noiseMappings[letterPressed]);
        if( e.preventDefault) e.preventDefault();
        return false;
    },
    init : function(id){
        var input = document.getElementById(id);
        input.onkeypress = this.keyHandler;
        input.focus();
    }
}

noiseMachine.init('drum-machine');

