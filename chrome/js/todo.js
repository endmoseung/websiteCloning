const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");
let todos = [];
const TODOS_KEY = "todos";


function clickXButton(event){
    const li = event.target.parentElement;   //여기서 생긴 버튼의 부모가 누구인지 찾아서 li로 선언해준것
    li.remove();
    todos = todos.filter((todo)=> todo.id !== parseInt(li.id)); // 현재클릭한 버튼의 부모요소의 id값과 todos에있는 id의 값들과 비교해서 같은것은 삭제하고 다른것들만 저장한다
    saveToDos(); //변경된 todos를 다시 저장해준다
}


function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(todos));
}

function paintToDo(saveToDo){
    const li = document.createElement("li");
    li.id = saveToDo.id ;  //li의 id 값을 saveToDoobj에서 생성한 id 값과 같게한것
    const span = document.createElement("span");
    span.innerText = saveToDo.text;
    const button = document.createElement("button")
    button.innerText = "❌";
    button.addEventListener("click", clickXButton);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function todoFormSubmit(event){
    event.preventDefault();
    const saveToDo = todoInput.value;
    const saveToDoObj = {
        text:saveToDo,
        id:Date.now(),  //각각의 li를 구별하기 위해서
    }
    todos.push(saveToDoObj);
    todoInput.value= "";
    paintToDo(saveToDoObj);
    saveToDos();
}



todoForm.addEventListener("submit", todoFormSubmit);  //todo input이 아니라 왜 todoform에서 addeventlister을 만드는지


const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos){
    const parseTodos = JSON.parse(savedToDos);
    todos = parseTodos;  //todos가 empty로 시작하지 않게
    parseTodos.forEach(paintToDo);
}
