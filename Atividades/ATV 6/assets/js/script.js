const formulario = document.getElementById("formPreco");
formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();
    const nome = (document.getElementById("nome").value);
    const preco = Number  (document.getElementById("preco").value);
    const quantidade = Number  (document.getElementById("quantidade").value);

     document.getElementById("resultado").textContent = "Valor total: " + (quantidade*preco);
});