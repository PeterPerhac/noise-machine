function loadSfx(soundName){
    return new Howl({ src: ['sounds/'+soundName+'.mp3', 'sounds/'+soundName+'.ogg','sounds/'+soundName+'.wav']});
}
var noiseMachine = {
    noises : {
        '0': loadSfx('laser'),
        '1': loadSfx('drum1'),
        '2': loadSfx('drum2'),
        '3': loadSfx('loop'),
        '4': loadSfx('ding'),
        '5': loadSfx('dong'),
        '6': loadSfx('doorbell'),
        '7': loadSfx('mobile'),
        '8': loadSfx('scratch'),
        'q': loadSfx('shotgun-reload'),
        'w': loadSfx('shotgun-fire')
    },
    playNoise: function(noise){ noise &&  noise.play(); },
    keyHandler: function (e) {
        var letterPressed = String.fromCharCode(e.keyCode)
        noiseMachine.playNoise(noiseMachine.noises[letterPressed]);
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

