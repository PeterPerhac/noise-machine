function loadSfx(soundName){
    return new Howl({ src: ['sounds/'+soundName+'.mp3', 'sounds/'+soundName+'.ogg','sounds/'+soundName+'.wav']});
}

var noiseMachine = {
    noises : {
        laser: this.loadSfx('laser'),
        drum1: this.loadSfx('drum1'),
        drum2: this.loadSfx('drum2'),
        loop:  this.loadSfx('loop')
    },
    playNoise: function(noise){
        var noise =  noiseMachine.noises[noise]
        if (noise) noise.play();
    },
    keyDownHandler: function (e) {
        var letterPressed = String.fromCharCode(e.keyCode)
        var noiseToPlay = null;
        switch (letterPressed) {
            case '0': noiseToPlay = 'laser';
                break;
            case '1': noiseToPlay = 'drum1';
                break;
            case '2': noiseToPlay = 'drum2';
                break;
        }
        noiseMachine.playNoise(noiseToPlay);
        if( e.preventDefault) e.preventDefault();
        return false;
    },
    init : function(id){
        var input = document.getElementById(id);
        input.onkeydown = this.keyDownHandler;
        input.focus();
    }
}

noiseMachine.init('drum-machine');

