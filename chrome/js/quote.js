const quotes = [
    {
        quote : "노력하자. 난 옛날부터 노력하는 것밖에 못 했었으니까. 노력은 하루하루 켜켜이 쌓아가는 거야. 조금씩이라도 좋으니 앞으로 나아가자.",
        author : "-구형석-",
    },
    {
        quote : "오늘 할수있는건 오늘해라",
        author : "-김승모-",
    },
    {
        quote : "최선보다는 최악을 차선으로 바꾸자",
        author : "-김승모-",
    },
    {
        quote : "나 자신에게 거짓말 하지말자",
        author : "-김승모-",
    },
    {
        quote : "최고의 경험은 사람이다",
        author : "-김승모-",
    },
    {
        quote : "비갠뒤에 비애 대신 happy end",
        author : "-김주엽-",
    },
    {
        quote : "“위기”를 거꾸로 해보세요 “기위”..아무말도 안됩니다. 탈출하세요",
        author : "-김영빈-",
    },
    {
        quote : "#이렇게 해도 명언같이 보인다#",
        author : "-김동규-",
    },
    {
        quote : "You Will Never Walk Alone",
        author : "-정성훈-",
    },
    {
        quote : "성공의 반대말이 뭡니까 실패 아니죠 도전하지 않는 거죠",
        author : "-김주엽-",
    }
]


const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
