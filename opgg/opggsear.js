const darkMode = document.querySelector(".darkmode");
const bodys = document.querySelector("body");

function clicker(){
    bodys.classList.toggle("active");
}

darkMode.addEventListener("click", clicker);
