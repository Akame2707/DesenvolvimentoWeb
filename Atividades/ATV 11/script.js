const verificarEstoque = document.getElementById("registrando");

verificarEstoque.addEventListener("submit", function(evento){
    evento.preventDefault();

    const nome = document.getElementById("nome").value;
    const quantidade = Number(document.getElementById("quantidade").value);
    const qtMinima = Number(document.getElementById("qtMinima").value);

    let resultado = "";

    if (quantidade < qtMinima){
        const reposicao = qtMinima - quantidade;

        for (let i = 1; i <= reposicao; i++) {
            resultado += "Unidade " + i + " para reposição<br>";
        }

        document.getElementById("resultado").innerHTML =
            "Produto: " + nome + "<br>" +
            "Reposição necessária: " + reposicao + " unidades<br><br>" +
            resultado;
    } else {
        document.getElementById("resultado").innerHTML =
            "Produto: " + nome + "<br>Estoque suficiente.";
    }
});