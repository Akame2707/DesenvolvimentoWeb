const formulario = document.getElementById("formNome");
formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;

    if (idade>18){
            document.getElementById("resultado").textContent = nome + " é maior de idade";
    } else {
        document.getElementById("resultado").textContent = nome + " é menor de idade"
    }
});