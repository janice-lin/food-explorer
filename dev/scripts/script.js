// Write your JavaScript here...

const body = document.body;
const btn = document.querySelector('.nav-btn');

btn.addEventListener('click', function(){
    body.classList.toggle('show');
});