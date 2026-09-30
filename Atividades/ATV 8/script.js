const formulario = document.getElementById("formaluno");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();
    const nome = (document.getElementById("nome").value);
    const nota = Number(document.getElementById("nota").value);

    if (nota>=9) {
        document.getElementById("resultado").textContent = "Parabéns! " + nome + " você foi excelente!"; 
    } else
        if (nota>=7) {
            document.getElementById("resultado").textContent = nome + " está aprovado!";
        } else 
            if (nota>=5){
                document.getElementById("resultado").textContent = nome + " você infelizmente está de recuperação";
            } else { 
                document.getElementById("resultado").textContent = nome + " você não tem solução.";
            }
});