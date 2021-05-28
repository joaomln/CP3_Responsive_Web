

// Define o comportamento na página index

var buttonCadastro = document.querySelector("#idBtnCad");
buttonCadastro.addEventListener("click", function() {
    event.preventDefault();
    window.location.replace("novocadastrologin.html");
})


// Define o comportamento na página de cadastro

var buttonLogin = document.querySelector(".cad-area #idBtnLog");
buttonLogin.addEventListener("click", function() {
    event.preventDefault();
    window.location.replace("indexl.html");
})