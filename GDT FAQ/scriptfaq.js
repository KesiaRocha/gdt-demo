document.addEventListener("DOMContentLoaded", () => {
    const perguntas = document.querySelectorAll(".pergunta");

    perguntas.forEach(pergunta => {
        pergunta.addEventListener("click", () => {
            const targetId = pergunta.getAttribute("data-target");
            const resposta = document.getElementById(targetId);

            // Alternar visibilidade e classe ativa
            if (pergunta.classList.contains("active")) {
                resposta.style.display = "none";
                pergunta.classList.remove("active");
            } else {
                // Fecha todas as outras respostas abertas
                document.querySelectorAll(".resposta").forEach(r => r.style.display = "none");
                document.querySelectorAll(".pergunta").forEach(p => p.classList.remove("active"));

                // Abre a resposta atual
                resposta.style.display = "block";
                pergunta.classList.add("active");
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Redireciona para a seção do formulário quando clicar em "Clique aqui"
    const redirectLink = document.getElementById('redirect');
    const formSection = document.getElementById('form-section');

    redirectLink.addEventListener("click", () => {
        formSection.style.display = "block";  // Exibe a seção de formulário
        window.scrollTo({
            top: formSection.offsetTop,
            behavior: 'smooth'
        });
    });

    // Função para esconder o prompt quando o usuário começa a digitar
    const questionInput = document.getElementById('question');

    questionInput.addEventListener("focus", () => {
        if (questionInput.placeholder === "Digite sua pergunta aqui...") {
            questionInput.placeholder = "";
        }
    });
});

