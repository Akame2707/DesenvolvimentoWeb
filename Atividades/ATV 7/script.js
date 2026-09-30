const formulario = document.getElementById("formQTminima");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const produto = document.getElementById("nome").value;
    const quantidade = Number(document.getElementById("quantidade").value);
    const qtMinima = Number(document.getElementById("qtMinima").value);

    if (quantidade > qtMinima) {
        document.getElementById("resultado").textContent =
            produto + " está com o estoque adequado.";
    } else if (quantidade === qtMinima) {
        document.getElementById("resultado").textContent =
            produto + " está com o estoque mínimo.";
    } else {
        document.getElementById("resultado").textContent =
            produto + " está com o estoque baixo.";
    }
});