const button = document.querySelector(".usefulsite .siteText button");
const site = document.querySelector(".usefulsite .site");
const adad = document.getElementById
button.addEventListener("click",buttonClick);

function buttonClick(){
    site.classList.toggle("hidden");
}