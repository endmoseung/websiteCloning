const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");   //element를 긁어오면 그안에 있는 자식요소들도 전부다 긁어 올 수 있다.
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";  // 통상적인 관습, string값을 저장할떄는 보통 모두 대문자로 표시한다. 본인이 작성하는 코드에 중복되는 string이 있을때는 꼭 변수로 저장해서 써주자!!
const LOCAL_USERNAMEKEY = "username";  //본인이 작성하는 코드에 중복되는 string이 있을때는 꼭 변수로 저장해서 써주자!!


function onLoginSubmit(event){
    event.preventDefault();   //event의 모든 행동을 하지 않도록 해주는 function 여기서는 submit의 기본 동작이 화면을 새로고침하는거기 때문에 막았따
    const userName = loginInput.value;
    localStorage.setItem(LOCAL_USERNAMEKEY, userName);  //정보를 얻어오고 싶을때는 key는 자기가 알아서 적고 value는 변수나 string이나 넣으면됨, getItem이 아니라 setItem을 쓴다.
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(userName);   // 왼쪽과 똑같이 실행되지만 왼쪽이 더 간겨라다 `` 안에 string은 그대로넣고 변수는 $()안에 표시한다     greeting.innerText= "Hello  " + userName +" !!!";
}


const savedUsername = localStorage.getItem(LOCAL_USERNAMEKEY);

function paintGreetings(username){
    greeting.innerText= `Hello ${username} !!!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);  //인풋창없애기
    loginForm.addEventListener("submit",onLoginSubmit); 
}else {
    paintGreetings(savedUsername);
}

//paintGreetings함수안에 넣는 arguement는 아무거나 넣어도 되지 않겟느냐는 질문에 대한 고찰 >> 우선 답은 안된다 왜냐? 우선 localstorage에 저장이 안되있는 처음 상황을 가정해보자 이때는 안에 정보값이 없기떄문에 onLoginSubmit함수를 실행하고 있을떄는 localstorage에 값이 저장되있지않아서 호출해봤자 null값이 불러와진다 그래서 input.value값을 불러오고 아래의 paintGreedings 함수에서 userName을 쓸수 없는이유는 이때의 상황이 홈페이지를 새로고침했을 상환인데 이떄의 정보는 input으로 부터 불러올수 없는 상황이기 떄문에 localStorage에 저장되있는 값으로 불러와야한다
