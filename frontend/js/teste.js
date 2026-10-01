// const = variavel que não muda de valor. document.getElementById = pega o elemento do html pelo id
const campoBusca = document.getElementById("campoBusca");
const alimentos = document.querySelectorAll(".alimento-card");
const filtroCategoria = document.getElementById("filtroCategoria");
const botoesDetalhes = document.querySelectorAll(".botao-detalhes");

const modalDetalhes = document.getElementById("modalDetalhes");
const fecharModal = document.getElementById("fecharModal");
const modalNome = document.getElementById("modalNome");
const modalCategoria = document.getElementById("modalCategoria");

const modalEnergia = document.getElementById("modalEnergia");
const modalProteina = document.getElementById("modalProteina");
const modalCarboidrato = document.getElementById("modalCarboidrato");
const modalFibras = document.getElementById("modalFibras");

// addEventListener = adiciona um evento ao elemento, nesse caso o evento é "input" que é disparado quando o usuário digita algo no campo de busca
// campoBusca.addEventListener("input", function () {

function filtrarAlimentos() {

    const textoBusca = campoBusca.value.toLowerCase();
    const categoriaSelecionada = filtroCategoria.value;

    // forEach = percorre todos os elementos do array alimentos e executa a função para cada elemento
    alimentos.forEach(function (alimento) {

        // querySelector = pega o primeiro elemento que corresponde ao seletor CSS, nesse caso o h3 dentro do alimento
        const nomeAlimento = alimento.querySelector("h3").textContent.toLowerCase();

        // dataset = pega o valor do atributo data-categoria do elemento alimento
        const categoriaAlimento = alimento.dataset.categoria;

        // includes = verifica se o nome do alimento contém o texto digitado pelo usuário
        const correspondeNome = nomeAlimento.includes(textoBusca);

        // verifica se a categoria do alimento corresponde à categoria selecionada no filtro, ou se o filtro está vazio (""), nesse caso todos os alimentos são exibidos
        const correspondeCategoria = categoriaSelecionada === "" || categoriaAlimento === categoriaSelecionada;

        if (correspondeNome && correspondeCategoria) {
            alimento.style.display = "block";
        } else {
            alimento.style.display = "none";
        }

    });
    
    //     // includes = verifica se o nome do alimento contém o texto digitado pelo usuário
    //     if (nomeAlimento.includes(textoBusca)) {

    //     alimento.style.display = "block";

    //     } else {

    //         alimento.style.display = "none";

    //     }

}

campoBusca.addEventListener("input", filtrarAlimentos);
filtroCategoria.addEventListener("change", filtrarAlimentos);

// parte do modal de detalhes do alimento
// querySelectorAll = pega todos os elementos que correspondem ao seletor CSS, nesse caso todos os botões com a classe "botao-detalhes"

botoesDetalhes.forEach(function (botao) {

    botao.addEventListener("click", function () {

        // closest = pega o elemento pai mais próximo que corresponde ao seletor CSS, nesse caso o elemento com a classe "alimento-card"
        const alimento = botao.closest(".alimento-card");

        // const nome = alimento.querySelector("h3").textContent;
        // const categoria = alimento.dataset.categoria;

        // const energia = alimento.dataset.energia;
        // const proteina = alimento.dataset.proteina;
        // const carboidrato = alimento.dataset.carboidrato;
        // const fibras = alimento.dataset.fibras;

        // number = converte o valor para número, nesse caso o id do alimento
        const idAlimento = Number(alimento.dataset.id);

        // find = percorre o array dadosAlimentos e retorna o primeiro elemento que corresponde à condição, nesse caso o elemento com o id igual ao idAlimento
        const dados = dadosAlimentos.find(function (item) {

            return item.id === idAlimento;

        });

        // ${} = template string, permite inserir variáveis dentro de uma string
        modalNome.textContent = dados.nome;
        modalCategoria.textContent = dados.categoria;
        modalEnergia.textContent = `🔥 ${dados.energia} kcal`;
        modalProteina.textContent = `💪 ${dados.proteina} g proteína`;
        modalCarboidrato.textContent = `🌾 ${dados.carboidrato} g carboidratos`;
        modalFibras.textContent = `🥬 ${dados.fibras} g fibras`;

        modalDetalhes.style.display = "flex";
    });

});

// evento para fechar o modal
fecharModal.addEventListener("click", function () {

    modalDetalhes.style.display = "none";

});

// evento para fechar o modal ao clicar fora do conteúdo do modal
modalDetalhes.addEventListener("click", function (evento) {

    // target = pega o elemento que disparou o evento, nesse caso o modalDetalhes
    if (evento.target === modalDetalhes) {

        modalDetalhes.style.display = "none";

    }

});

const dadosAlimentos = [

    {
        id: 1,
        nome: "🍚 Arroz branco cozido",
        categoria: "Cereais e derivados",
        energia: 128,
        proteina: 2.5,
        carboidrato: 28,
        fibras: 1.6
    },

    {
        id: 2,
        nome: "🍌 Banana prata",
        categoria: "Frutas",
        energia: 90,
        proteina: 1,
        carboidrato: 23,
        fibras: 2
    },

    {
        id: 3,
        nome: "🥚 Ovo de galinha",
        categoria: "Carnes e ovos",
        energia: 143,
        proteina: 13,
        carboidrato: 1.1,
        fibras: 0
    }

];

