const search = document.querySelector('.btn');
const input = document.querySelector('#text');

search.addEventListener('click', ()=>{
    input.classList.toggle('open');
})