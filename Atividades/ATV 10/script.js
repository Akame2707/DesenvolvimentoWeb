const sequencia = document.getElementById("sequencia");

sequencia.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const numero1 = Number(document.getElementById("numero1").value);
    const numero2 = Number(document.getElementById("numero2").value);

    let resultado = "";

    for (let i = numero1; i <= numero2; i++) {
        resultado += i + " ";
    }

    document.getElementById("resultado").innerHTML = resultado;
});