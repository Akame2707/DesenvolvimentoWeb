const formulario = document.getElementById("formNome");
formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    document.getElementById("resultado").innerHTML = nome + " tem " + idade + " anos";
});