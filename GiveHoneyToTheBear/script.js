const squishbtn = document.getElementById('squishoney');

function squishhoney(){
    const tocarAudio = new Audio(`./assets/squishhoney.mp3`);
    tocarAudio.volume = 0.5;
    tocarAudio.play();
}

squishbtn.addEventListener('click', squishhoney);

const Btn = document.getElementById('btn');


function playSound(){
    const tocarAudio = new Audio(`./assets/sound/The Very Last Lullaby.wav`);
    tocarAudio.volume = 0.1;
    tocarAudio.play();
}

Btn.addEventListener('click', playSound);