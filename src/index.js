const label = document.querySelector('#label');
const options = document.querySelector('#dropdown');
const full = document.querySelector('#full');

options.style.display = 'none';

full.addEventListener('mouseover', () => {
    label.style.color = 'pink';
    options.style.display = 'inline';
})

full.addEventListener('mouseout', () => {
    label.style.color = 'black';
    options.style.display = 'none';
})
