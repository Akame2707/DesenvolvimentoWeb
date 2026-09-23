const formulario = document.getElementById("formNome");
formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();
    const nome = document.getElementById("nome").value;
    document.getElementById("resultado").innerHTML = nome + "<br> bem vindo";
});