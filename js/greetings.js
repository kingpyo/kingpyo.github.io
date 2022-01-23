const loginForm = document.querySelector("#login_form")
const loginInput = loginForm.querySelector("#login_form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"


function loginHandleSubmit(event) {
    event.preventDefault();
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    paintgreetings();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    
}

function paintgreetings() {
    const savedUsername = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${savedUsername}`;

    
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", loginHandleSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", loginHandleSubmit);
} else {
    paintgreetings();
}