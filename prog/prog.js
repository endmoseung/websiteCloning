const menu = document.querySelector('.intro1 .menu');
const centxt = document.querySelector('.intro1 .intro1_centxt');
const righttxt = document.querySelector('.intro1 .intro1_righttxt');

const button = document.querySelector('.button');
const dropbox = document.querySelector('.dropbox');

const introresponbut = document.querySelector('.introrespon .introresponbut');
const introresponlist = document.querySelector('.introrespon .introresponlist');


introresponbut.addEventListener('click', ()=> {
    introresponlist.classList.toggle('active');
})

button.addEventListener('click', ()=> {
    dropbox.classList.toggle('active');
})

menu.addEventListener('click', ()=> {
    centxt.classList.toggle('active');
    righttxt.classList.toggle('active');
})