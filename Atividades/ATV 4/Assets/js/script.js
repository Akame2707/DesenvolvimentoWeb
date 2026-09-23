const formulario = document.getElementById("formNota");
formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();
    const nome = document.getElementById("nome").value;
    const nota = document.getElementById("nota").value;

    if (nota>7){
            document.getElementById("resultado").textContent = nome + " foi aprovado";
    } else {
        document.getElementById("resultado").textContent = nome + " foi reprovado"
    }
});