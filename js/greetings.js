const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const Hidden_Classname = "hidden";
const UserName_Key = "username"

function onLoginSubmit(event){
 event.preventDefault();
 loginForm.classList.add(Hidden_Classname); 
 const username = loginInput.value;
 localStorage.setItem (UserName_Key, username);
paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(Hidden_Classname);
}
const savedUsername = localStorage.getItem(UserName_Key);   


if (savedUsername === null){
    loginForm.classList.remove(Hidden_Classname);
    loginForm.addEventListener("submit",onLoginSubmit);

} else {
  paintGreetings(savedUsername);
}