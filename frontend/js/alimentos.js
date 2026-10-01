const campoBusca = document.getElementById("campoBusca");
const alimentos = document.querySelectorAll(".alimento-card");
const filtroCategoria = document.getElementById("filtroCategoria");


function filtrarAlimentos() {

    const textoBusca = campoBusca.value.toLowerCase();
    const categoriaSelecionada = filtroCategoria.value;

    alimentos.forEach(function (alimento) {

        const nomeAlimento =
            alimento.querySelector("h3").textContent.toLowerCase();

        const categoriaAlimento =
            alimento.dataset.categoria;

        const correspondeNome =
            nomeAlimento.includes(textoBusca);

        const correspondeCategoria =
            categoriaSelecionada === "" ||
            categoriaAlimento === categoriaSelecionada;

        if (correspondeNome && correspondeCategoria) {

            alimento.style.display = "block";

        } else {

            alimento.style.display = "none";

        }

    });

}


campoBusca.addEventListener("input", filtrarAlimentos);

filtroCategoria.addEventListener("change", filtrarAlimentos);