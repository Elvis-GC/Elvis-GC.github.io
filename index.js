const card = document.querySelector('.card-n');

card.addEventListener('click', function() {
    // al hacer click, agrega clase css open-n al card-n
    card.classList.toggle('open-n')
});