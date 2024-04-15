const pianoKeys = document.querySelectorAll('.key');
volumeSlider = document.querySelector('.volume-slider input');
keysCheckbox = document.querySelector('.keys-checkbox input');

let allKeys = [],
audio = new Audio(`./white keys/0.mp3`);

const playTune = (key) => {
    audio.src=`./white keys/${key}.mp3`;
    audio.play();
    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add('active');
    setTimeout(() => {
        clickedKey.classList.remove('active');
    }, 150);
}

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key));
});

const showHideKeys = (e) => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

const handleVolume = (e) => {
    audio.volume = e.target.value;
}

const pressedKey = (e) => {
    if(allKeys.includes(e.key)) playTune(e.key);
}

keysCheckbox.addEventListener('click',showHideKeys);
volumeSlider.addEventListener('input',handleVolume);
document.addEventListener('keydown', pressedKey);