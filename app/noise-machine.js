var noiseMachine = {
    noise : new Howl({
        src: ['sounds/noise.ogg','sounds/noise.wav']
    }),
    playNoise: function(){
        noise.play();
    }
}
