const infoboxcon = document.querySelector('header footer .addinfo .addinfos .addinfobox .infoboxcon');
const addinfomain = document.querySelector('header footer .addinfo .addinfos .addinfobox .addinfomain');

infoboxcon.addEventListener('click', ()=> {
    addinfomain.classList.toggle('active');
})

const etcinfobut = document.querySelector('.etcinfobut');
const etcinfotxt = document.querySelector('.etcinfotxt');
const etcinfotxtmain = document.querySelector('.etcinfotxtmain');

etcinfobut.addEventListener('click', ()=> {
    etcinfotxt.classList.toggle('active');
    etcinfotxtmain.classList.toggle('active');
})