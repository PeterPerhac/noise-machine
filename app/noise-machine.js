var noiseMachine = {
    noises : {
        laser: new Howl({ src: ['sounds/noise.ogg','sounds/noise.wav'] }),
        drum1: new Howl({ src: ['sounds/drum1.ogg','sounds/drum1.wav'] }),
        drum2: new Howl({ src: ['sounds/drum2.ogg','sounds/drum2.wav'] })
    },
    playNoise: function(noise){
        var noise =  noiseMachine.noises[noise]
        if (noise) noise.play();
    },
    onKeyDown: function (e) {
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
    init : function(){
        var input = document.getElementById('drum-machine');
        input.onkeydown = this.onKeyDown;
        input.focus();
    }
}

noiseMachine.init();

