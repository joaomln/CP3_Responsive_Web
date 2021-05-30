/*  
    João Pedro Milani RM 88132;
    Matheus Pismel de Jeronymo RM 86931;
    Jordan Henrique RM 89372;
    Pedro Albuquerque RM 86777;
*/

var formIndex = document.querySelector("#index-form");
var formCad = document.querySelector("#cadastro-form")

function usuario(nome, senha){
    this.nome = nome,
    this.senha = senha
}

const joao = new usuario('joao','88132');
const jordan = new usuario('jordan','89372');
const pedro =  new usuario('pedro','86777');
const matheus = new usuario('matheus','86931');


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
            alert("Usuário ou senha inválidos!!");
        return;
   
    }

    users.forEach(function(user) {
        (user.nome == currentUser.username && user.senha == currentUser.password)? validUserRedirect() : false;
        var mensagemErro = formIndex.querySelector("#mensagem-erro").textContent = "";
    });
}


function CadButtonEvent(button){
    button.addEventListener("click",function(){
        CadastraUsuario();
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
