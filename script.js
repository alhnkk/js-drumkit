function playSound(e) {
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    let key = document.querySelector(`div[data-key="${e.keyCode}"]`)

    if(!audio) return; 
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function removeTransition (e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
} 

document.addEventListener('keydown', playSound)
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
