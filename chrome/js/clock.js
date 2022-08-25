const clock = document.querySelector("h2#clock");

function clocks(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");   //padStart adds behind string if string doesn't meet first arguement's number.
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    console.log(date);
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
clocks();   // 이걸 실핼 안해주면 화면상에 공백이 1초 발생하기떄문에 넣어준다
setInterval(clocks,1000);   