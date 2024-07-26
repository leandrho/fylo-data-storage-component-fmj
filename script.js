const updateTrack = (range) => {
    const container = document.querySelector('.range-container');
    const perc = (range.value * 100) / range.max;
    container.querySelector('.range-bar').style.width = perc + '%';
}

const input = document.querySelector('input[type="range"]');
input.addEventListener('input', () => {
    console.log(input.value)
    updateTrack(input);
    // updateData(input);
});
updateTrack(input);