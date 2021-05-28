
var formIndex = document.querySelector("#index-form");

function usuario(nome, senha){
    this.nome = nome,
    this.senha = senha
}

const joao = new usuario('joao','88132');
const jordan = new usuario('jordan','89372');
const pedro =  new usuario('pedro','55555')
const matheus = new usuario('matheus','55555')


const users = [joao, jordan, pedro, matheus];

function getUserFormData(form) {
    var data = {
        username: form.usernameField.value,
        password: form.passwordField.value
    }

    return data;
}

function validUserRedirect() {
    window.location.replace("portal.html");
    return;
}

function validaUsuario(){

    var currentUser = getUserFormData(formIndex);
    if(!currentUser.username || !currentUser.password){
        console.log("Erro!!");
        return;
    }

    users.forEach(function(user) {
        (user.nome == currentUser.username && user.senha == currentUser.password)? validUserRedirect() : false;
        var mensagemErro = formIndex.querySelector("#mensagem-erro").textContent = "username ou senha inválidos!";
    });
}


function LoginButtonEvent(button) {
    button.addEventListener("click", function(){
        console.log("-> buttonEvent");
        validaUsuario();
    });
}

var indexLoginButton = formIndex.querySelector("#id-btn-login");
LoginButtonEvent(indexLoginButton, "portal.html");