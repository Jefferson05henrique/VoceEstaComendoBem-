const botoesDetalhes =
    document.querySelectorAll(".botao-detalhes");

const modalDetalhes =
    document.getElementById("modalDetalhes");

const fecharModal =
    document.getElementById("fecharModal");

const modalNome =
    document.getElementById("modalNome");

const modalCategoria =
    document.getElementById("modalCategoria");

const modalEnergia =
    document.getElementById("modalEnergia");

const modalProteina =
    document.getElementById("modalProteina");

const modalCarboidrato =
    document.getElementById("modalCarboidrato");

const modalFibras =
    document.getElementById("modalFibras");


botoesDetalhes.forEach(function (botao) {

    botao.addEventListener("click", function () {

        const alimento =
            botao.closest(".alimento-card");

        const idAlimento =
            Number(alimento.dataset.id);

        const dados =
            dadosAlimentos.find(function (item) {

                return item.id === idAlimento;

            });


        modalNome.textContent =
            dados.nome;

        modalCategoria.textContent =
            dados.categoria;

        modalEnergia.textContent =
            `🔥 ${dados.energia} kcal`;

        modalProteina.textContent =
            `💪 ${dados.proteina} g proteína`;

        modalCarboidrato.textContent =
            `🌾 ${dados.carboidrato} g carboidratos`;

        modalFibras.textContent =
            `🥬 ${dados.fibras} g fibras`;


        modalDetalhes.style.display = "flex";

    });

});


fecharModal.addEventListener("click", function () {

    modalDetalhes.style.display = "none";

});


modalDetalhes.addEventListener("click", function (evento) {

    if (evento.target === modalDetalhes) {

        modalDetalhes.style.display = "none";

    }

});