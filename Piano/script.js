const whiteKeys = document.querySelectorAll('.white');
const blackKeys = document.querySelectorAll('.black');

whiteKeys.forEach((white,index) => {
    white.addEventListener('click', () => {
        let sound = new Audio(`./white keys/${index}.mp3`);
        playSound(sound);
    });
});

blackKeys.forEach((black,index) => {
    black.addEventListener('click', () => {
        let sound = new Audio(`./black keys/${index}.mp3`);
        playSound(sound);
    });
});

function playSound(sound){
    sound.pause();
    sound.currentTime = 0;
    sound.play();
}

keysCheckbox = document.querySelector('.keys-checkbox input');
const showHideKeys = (e) => {
    whiteKeys.forEach(key => key.classList.toggle("hide"));
    blackKeys.forEach(key => key.classList.toggle("hide"));
}
keysCheckbox.addEventListener('click',showHideKeys);

const Casio = document.querySelectorAll('.casio');
onOff = document.querySelector('.on-off input');
const enableCasio = () => {
    Casio.forEach(key => key.classList.toggle("disabled"));
}
onOff.addEventListener('click',enableCasio);

// const pianoKeys = document.querySelectorAll('.key');
// const volumeSlider = document.querySelector('.volume-slider input');
// let sound = new Audio(`./white keys/0.mp3`);
// const playTune = (key) =>
// {
//     sound.src=`./white keys/${key}.mp3`;
//     sound.play();
// }

// pianoKeys.forEach(key => {
//     key.addEventListener("key", () => playTune(key.dataset.key));
// });
// volumeSlider.addEventListener('input',handleVolume);
// const handleVolume = (e) => {
//     sound.volume = e.target.value;
// }