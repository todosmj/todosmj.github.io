const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");
const areaTodo = document.querySelector("#area-todo");
const USERNAME_KEY = 'login';
const HIDDEN_CLASSNAME = 'hidden';

function onLoginSubmit(event) {
    event.preventDefault();
    
    if(!validation()) return;

    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function validation(){
    const userName = loginInput.value;
    if(userName === ""){
        alert("이름을 입력해주세요.");
        return false;
    } else if(userName.length > 15) {
        alert("15자 이하로 입력해주세요.");
        return false;
    }
    return true;
}

  
function paintGreetings(username) {
    greeting.querySelector("span").innerText = `Welcom ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    areaTodo.classList.remove(HIDDEN_CLASSNAME);
}
  
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}

