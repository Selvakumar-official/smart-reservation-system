// js/auth.js

function login(){

let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

firebase.auth()
.signInWithEmailAndPassword(email, password)
.then(function(){
alert("Login Successful");
window.location = "tracking.html";
})
.catch(function(error){
alert(error.message);
});

}
