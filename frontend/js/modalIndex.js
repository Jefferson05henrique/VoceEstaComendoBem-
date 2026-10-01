// const botoesDetalhes =
//     document.querySelectorAll(".botao-detalhes");

// const modalDetalhes =
//     document.getElementById("modalDetalhes");

// const fecharModal =
//     document.getElementById("fecharModal");

// const modalNome =
//     document.getElementById("modalNome");

// const modalCategoria =
//     document.getElementById("modalCategoria");

// const modalEnergia =
//     document.getElementById("modalEnergia");

// const modalProteina =
//     document.getElementById("modalProteina");

// const modalCarboidrato =
//     document.getElementById("modalCarboidrato");

// const modalFibras =
//     document.getElementById("modalFibras");
    
// function abrirModal(alimento) {
    
//     if (alimento) return; // Se o alimento for nulo ou indefinido, não faz nada

//     modalNome.textContent = alimento.nome;
//     modalCategoria.textContent = alimento.categoria;
//     modalEnergia.textContent = `${alimento.energia} kcal`;
//     modalProteina.textContent = `${alimento.proteina} g`;
//     modalCarboidrato.textContent = `${alimento.carboidrato} g`;
//     modalFibras.textContent = `${alimento.fibras} g`;

//     modalDetalhes.style.display = "flex";
// }

// function fecharModal() {
//     modalDetalhes.style.display = "none";
// }

// fecharModal.addEventListener("click", fecharModal);

// window.addEventListener("click", function (event) {
//     if (event.target === modalDetalhes) {
//         fecharModal();
//     }
// });

// Seleção dos elementos da página inicial (index.html)
const campoBusca = document.getElementById("campoBusca");
const botaoBuscar = document.getElementById("botao-detalhes");
const modalDetalhes = document.getElementById("modalDetalhes");
const btnFecharModal = document.getElementById("fecharModal");

const modalNome = document.getElementById("modalNome");
const modalCategoria = document.getElementById("modalCategoria");
const modalEnergia = document.getElementById("modalEnergia");
const modalProteina = document.getElementById("modalProteina");
const modalCarboidrato = document.getElementById("modalCarboidrato");
const modalFibras = document.getElementById("modalFibras");

// Função para buscar o alimento no array dadosAlimentos (vindo do dados.js)
function buscarEAbrirModal(termoDigitado) {
    if (!termoDigitado) return;

    const termoFormatado = termoDigitado.trim().toLowerCase();

    // Procura no array removendo emojis para comparar corretamente
    const alimentoEncontrado = dadosAlimentos.find(alimento => {
        const nomeLimpo = alimento.nome
            .replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}]/gu, '')
            .trim()
            .toLowerCase();
            
        return nomeLimpo === termoFormatado || alimento.nome.toLowerCase() === termoFormatado;
    });

    if (alimentoEncontrado) {
        exibirModal(alimentoEncontrado);
    } else {
        alert("Alimento não encontrado!");
    }
}

// Preenche as informações no HTML e mostra o modal
function exibirModal(alimento) {
    if (!alimento) return;

    modalNome.textContent = alimento.nome;
    modalCategoria.textContent = alimento.categoria;
    modalEnergia.textContent = `🔥 ${alimento.energia} kcal`;
    modalProteina.textContent = `💪 ${alimento.proteina} g proteína`;
    modalCarboidrato.textContent = `🌾 ${alimento.carboidrato} g carboidratos`;
    modalFibras.textContent = `🥬 ${alimento.fibras} g fibras`;

    modalDetalhes.style.display = "flex";
}

// Oculta o modal
function esconderModal() {
    modalDetalhes.style.display = "none";
}

// --- EVENTOS ---

// 1. Detecta quando o usuário clica/seleciona uma opção exata da lista (datalist)
campoBusca.addEventListener("input", function () {
    const valorInput = campoBusca.value.trim().toLowerCase();

    // Verifica se a opção digitada coincide perfeitamente com um item
    const opcaoExata = dadosAlimentos.find(alimento => {
        const nomeLimpo = alimento.nome
            .replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}]/gu, '')
            .trim()
            .toLowerCase();
        return nomeLimpo === valorInput || alimento.nome.toLowerCase() === valorInput;
    });

    if (opcaoExata) {
        exibirModal(opcaoExata);
    }
});

// 2. Dispara a busca ao clicar no botão 'Pesquisar'
if (botaoBuscar) {
    botaoBuscar.addEventListener("click", function () {
        buscarEAbrirModal(campoBusca.value);
    });
}

// 3. Permite buscar apertando 'Enter' no teclado
campoBusca.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        buscarEAbrirModal(campoBusca.value);
    }
});

// 4. Fechar modal no botão 'X'
if (btnFecharModal) {
    btnFecharModal.addEventListener("click", esconderModal);
}

// 5. Fechar modal ao clicar fora da janela
window.addEventListener("click", function (event) {
    if (event.target === modalDetalhes) {
        esconderModal();
    }
});