var noiseMachine = {
    load: function(soundName){
        return new Howl({ src: ['sounds/'+soundName+'.ogg','sounds/'+soundName+'.wav']});
    },
    noises : {
        laser: this.load('laser'),
        drum1: this.load('drum1'),
        drum2: this.load('drum2'),
        loop:  this.load('loop')
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

