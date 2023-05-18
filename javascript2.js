
let container = document.getElementById('container');

let new_div = document.createElement('h1');
new_div.classList.add('3omda');
new_div.innerText = 'This is 3omda';

container.appendChild(new_div);




let btn = document.getElementById('btn');
btn.addEventListener('click' , function(e){
    e.target.style.background = 'blue';
});