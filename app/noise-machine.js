function loadSfx(soundName){
    return new Howl({ src: ['sounds/'+soundName+'.mp3', 'sounds/'+soundName+'.ogg','sounds/'+soundName+'.wav']});
}
var noiseMachine = {
    noises : {
        laser: this.loadSfx('laser'),
        drum1: this.loadSfx('drum1'),
        drum2: this.loadSfx('drum2'),
        drum2: this.loadSfx('drum2'),
        ding: this.loadSfx('ding'),
        dong: this.loadSfx('dong'),
        doorbell: this.loadSfx('doorbell'),
        mobile: this.loadSfx('mobile'),
        scratch: this.loadSfx('scratch'),
        shotgun1: this.loadSfx('shotgun-reload'),
        shotgun2: this.loadSfx('shotgun-fire'),
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
            case '3': noiseToPlay = 'loop';
                break;
            case '4': noiseToPlay = 'ding';
                break;
            case '5': noiseToPlay = 'dong';
                break;
            case '6': noiseToPlay = 'doorbell';
                break;
            case '7': noiseToPlay = 'mobile';
                break;
            case '8': noiseToPlay = 'scratch';
                break;
            case 'Q': noiseToPlay = 'shotgun1';
                break;
            case 'W': noiseToPlay = 'shotgun2';
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

