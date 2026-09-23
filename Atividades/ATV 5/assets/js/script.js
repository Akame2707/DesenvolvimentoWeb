const formulario = document.getElementById("formSoma");
formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();
    const n1 = Number  (document.getElementById("n1").value);
    const n2 = Number  (document.getElementById("n2").value);

     document.getElementById("resultado").textContent = n1+n2;
});