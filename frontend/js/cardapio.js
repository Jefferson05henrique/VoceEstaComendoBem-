const botaoDiario = document.getElementById("botaoDiario");
const botaoSemanal = document.getElementById("botaoSemanal");
const botaoMensal = document.getElementById("botaoMensal");

const cardapioDiario = document.getElementById("cardapioDiario");
const cardapioSemanal = document.getElementById("cardapioSemanal");
const cardapioMensal = document.getElementById("cardapioMensal");

const botaoAdicionarAlimento =
    document.getElementById("botaoAdicionarAlimento");

const campoBusca =
    document.getElementById("campoBusca");


// ==========================================================
// DADOS DOS ALIMENTOS
// ==========================================================

// Array temporário com os alimentos.
//
// Mais para frente, esses dados não ficarão mais diretamente
// neste arquivo.
//
// Eles virão do banco de dados MySQL através da nossa API em Python.

const alimentosCardapio = [

    {
        id: 1,
        nome: "Arroz Integral",
        categoria: "Cereais e derivados",
        energia: 128,
        proteina: 2.5,
        carboidrato: 28,
        lipidios: 0.2,
        fibras: 1.6,
        calcio: 5,
        ferro: 0.2,
        sodio: 1
    },

    {
        id: 2,
        nome: "Feijão Preto",
        categoria: "Leguminosas",
        energia: 77,
        proteina: 4.5,
        carboidrato: 14,
        lipidios: 0.5,
        fibras: 8,
        calcio: 27,
        ferro: 1.3,
        sodio: 2
    },

    {
        id: 3,
        nome: "Peito de Frango",
        categoria: "Carnes e ovos",
        energia: 159,
        proteina: 32,
        carboidrato: 0,
        lipidios: 3.2,
        fibras: 0,
        calcio: 5,
        ferro: 0.4,
        sodio: 74
    },

    {
        id: 4,
        nome: "Salada Verde",
        categoria: "Verduras e legumes",
        energia: 20,
        proteina: 1.5,
        carboidrato: 3,
        lipidios: 0.2,
        fibras: 1.5,
        calcio: 40,
        ferro: 0.5,
        sodio: 15
    }

];


// ==========================================================
// MODAL: ADICIONAR ALIMENTO
// ==========================================================

const modalAlimento =
    document.getElementById("modalAlimento");

const fecharModalAlimento =
    document.getElementById("fecharModalAlimento");

const quantidadeAlimento =
    document.getElementById("quantidadeAlimento");

const botaoConfirmarAlimento =
    document.getElementById("botaoConfirmarAlimento");


// Elementos que receberão as informações
// do alimento selecionado.

const nomeAlimentoModal =
    document.getElementById("nomeAlimentoModal");

const categoriaAlimentoModal =
    document.getElementById("categoriaAlimentoModal");

const energiaModal =
    document.getElementById("energiaModal");

const proteinaModal =
    document.getElementById("proteinaModal");

const carboidratoModal =
    document.getElementById("carboidratoModal");

const lipidiosModal =
    document.getElementById("lipidiosModal");

const fibrasModal =
    document.getElementById("fibrasModal");

const calcioModal =
    document.getElementById("calcioModal");

const ferroModal =
    document.getElementById("ferroModal");

const sodioModal =
    document.getElementById("sodioModal");


// Guarda temporariamente o alimento
// que foi selecionado pelo usuário.
//
// Vamos utilizar essa variável depois para
// adicionar o alimento à refeição escolhida.

let alimentoSelecionado = null;


// ==========================================================
// FECHAR MODAL
// ==========================================================

// Ao clicar no X, fecha o modal.

fecharModalAlimento.addEventListener("click", function () {

    modalAlimento.style.display = "none";

});


// Fecha o modal quando o usuário clicar
// na área escura fora da caixa.

modalAlimento.addEventListener("click", function (evento) {

    if (evento.target === modalAlimento) {

        modalAlimento.style.display = "none";

    }

});


// ==========================================================
// CARDÁPIO DIÁRIO
// ==========================================================

// Ao clicar no botão "Cardápio Diário",
// exibe o cardápio diário.

botaoDiario.addEventListener("click", function () {

    // Exibe o cardápio diário.
    cardapioDiario.style.display = "block";

    // Oculta o cardápio semanal.
    cardapioSemanal.style.display = "none";

    // Oculta o cardápio mensal.
    cardapioMensal.style.display = "none";

    // Chama a função para criar a tabela diária.
    criarTabelaDiaria();

});


// Função para criar a tabela do cardápio diário.

function criarTabelaDiaria() {

    const tabela =
        document.getElementById("tabelaDiaria");


    // Cria o conteúdo HTML da tabela diária.
    //
    // Diferentemente da tabela semanal, aqui não precisamos
    // criar uma linha para cada dia da semana.
    //
    // O objetivo do cardápio diário é mostrar as refeições
    // do dia lado a lado.

    tabela.innerHTML = `

        <thead>

            <tr>

                <th>Café da Manhã</th>

                <th>Almoço</th>

                <th>Lanche da Tarde</th>

                <th>Jantar</th>

                <th>Ceia</th>

            </tr>

        </thead>


        <tbody>

            <tr>

                <td data-refeicao="cafe"></td>

                <td data-refeicao="almoco"></td>

                <td data-refeicao="lanche"></td>

                <td data-refeicao="jantar"></td>

                <td data-refeicao="ceia"></td>

            </tr>

        </tbody>

    `;

}


// ==========================================================
// ADICIONAR ALIMENTO
// ==========================================================

// Ao clicar no botão "Adicionar Alimento",
// procura o alimento digitado pelo usuário.

botaoAdicionarAlimento.addEventListener("click", function () {

    const nomeDigitado =
        campoBusca.value.trim();


    // A função find() procura dentro do array
    // alimentosCardapio um alimento cujo nome
    // seja igual ao nome digitado.

    const alimentoEncontrado =
        alimentosCardapio.find(function (alimento) {

            return alimento.nome === nomeDigitado;

        });


    // ! = operador de negação.
    //
    // Se alimentoEncontrado não existir,
    // significa que o alimento não foi encontrado.

    if (!alimentoEncontrado) {

        alert("Alimento não encontrado.");

        return;

    }


    // Guarda o alimento encontrado na variável.
    //
    // Isso será importante quando chegarmos à etapa
    // de escolher o dia e a refeição.

    alimentoSelecionado = alimentoEncontrado;


    // ======================================================
    // PREENCHER O MODAL
    // ======================================================

    // O nome do alimento já vem automaticamente
    // da pesquisa feita anteriormente.
    //
    // O usuário NÃO precisa digitar o nome novamente.

    nomeAlimentoModal.textContent =
        alimentoEncontrado.nome;


    categoriaAlimentoModal.textContent =
        `Categoria: ${alimentoEncontrado.categoria}`;


    energiaModal.textContent =
        `🔥 Energia: ${alimentoEncontrado.energia} kcal`;


    proteinaModal.textContent =
        `💪 Proteína: ${alimentoEncontrado.proteina} g`;


    carboidratoModal.textContent =
        `🌾 Carboidratos: ${alimentoEncontrado.carboidrato} g`;


    lipidiosModal.textContent =
        `🥑 Lipídios: ${alimentoEncontrado.lipidios} g`;


    fibrasModal.textContent =
        `🥬 Fibras: ${alimentoEncontrado.fibras} g`;


    calcioModal.textContent =
        `🦴 Cálcio: ${alimentoEncontrado.calcio} mg`;


    ferroModal.textContent =
        `⚙️ Ferro: ${alimentoEncontrado.ferro} mg`;


    sodioModal.textContent =
        `🧂 Sódio: ${alimentoEncontrado.sodio} mg`;


    // Coloca a quantidade inicial como 100g.
    //
    // Posteriormente, quando trabalharmos com a matemática,
    // essa quantidade será utilizada para recalcular
    // todos os nutrientes.

    quantidadeAlimento.value = 100;


    // Abre o modal.

    modalAlimento.style.display = "flex";

});


// ==========================================================
// CONFIRMAR ALIMENTO
// ==========================================================

// Por enquanto, este botão apenas confirma que
// o alimento foi selecionado.
//
// Ainda não vamos decidir automaticamente
// em qual dia/refeição colocar o alimento.
//
// Essa será nossa próxima etapa.

botaoConfirmarAlimento.addEventListener("click", function () {

    if (!alimentoSelecionado) {

        alert("Nenhum alimento foi selecionado.");

        return;

    }


    const quantidade =
        Number(quantidadeAlimento.value);


    if (quantidade <= 0) {

        alert("Digite uma quantidade válida.");

        return;

    }


    console.log("Alimento selecionado:", alimentoSelecionado);

    console.log("Quantidade:", quantidade);


    // Fecha o modal.

    modalAlimento.style.display = "none";

});


// ==========================================================
// CARDÁPIO SEMANAL
// ==========================================================

// Ao clicar no botão "Cardápio Semanal",
// exibe o cardápio semanal.

botaoSemanal.addEventListener("click", function () {

    // Oculta o cardápio diário.
    cardapioDiario.style.display = "none";

    // Exibe o cardápio semanal.
    cardapioSemanal.style.display = "block";

    // Oculta o cardápio mensal.
    cardapioMensal.style.display = "none";

    // Chama a função para criar a tabela semanal.
    criarTabelaSemanal();

});


// Função para criar a tabela semanal.

function criarTabelaSemanal() {

    const tabela =
        document.getElementById("tabelaSemanal");


    const dias = [

        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado",
        "Domingo"

    ];


    // Cria o conteúdo HTML da tabela semanal.
    //
    // A função map() percorre o array dias
    // e cria uma linha (<tr>) para cada dia.

    tabela.innerHTML = `

        <thead>

            <tr>

                <th>Dia da Semana</th>

                <th>Café da Manhã</th>

                <th>Almoço</th>

                <th>Lanche da Tarde</th>

                <th>Jantar</th>

                <th>Ceia</th>

            </tr>

        </thead>


        <tbody>

            ${dias.map(function (dia) {

                return `

                    <tr>

                        <th>${dia}</th>

                        <td
                            data-dia="${dia}"
                            data-refeicao="cafe">
                        </td>

                        <td
                            data-dia="${dia}"
                            data-refeicao="almoco">
                        </td>

                        <td
                            data-dia="${dia}"
                            data-refeicao="lanche">
                        </td>

                        <td
                            data-dia="${dia}"
                            data-refeicao="jantar">
                        </td>

                        <td
                            data-dia="${dia}"
                            data-refeicao="ceia">
                        </td>

                    </tr>

                `;

            }).join("")}

        </tbody>

    `;

}


// ==========================================================
// CARDÁPIO MENSAL
// ==========================================================

// Ao clicar no botão "Cardápio Mensal",
// oculta o cardápio semanal e diário.

botaoMensal.addEventListener("click", function () {

    // Oculta o cardápio diário.
    cardapioDiario.style.display = "none";

    // Oculta o cardápio semanal.
    cardapioSemanal.style.display = "none";

    // Exibe o cardápio mensal.
    cardapioMensal.style.display = "block";

    // Chama a função para criar o cardápio mensal.
    criarCardapioMensal();

});


// Função para criar o cardápio mensal.

function criarCardapioMensal() {

    const semanasMensais =
        document.getElementById("semanasMensais");


    // Limpa o conteúdo anterior do cardápio mensal
    // antes de criar um novo.

    semanasMensais.innerHTML = "";


    // Array com os dias da semana.

    const dias = [

        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado",
        "Domingo"

    ];


    // for loop para criar 4 semanas no cardápio mensal.
    //
    // let semana = 1
    // A variável começa em 1.
    //
    // semana <= 4
    // O loop continua enquanto semana for menor
    // ou igual a 4.
    //
    // semana++
    // Aumenta 1 a cada repetição.

    for (let semana = 1; semana <= 4; semana++) {


        // Adiciona o conteúdo HTML de cada semana.
        //
        // O operador += adiciona o novo conteúdo
        // ao conteúdo que já existe.

        semanasMensais.innerHTML += `

            <div class="semana-mensal">

                <h3>Semana ${semana}</h3>

                <div class="tabelacardapio">

                    <table>

                        <thead>

                            <tr>

                                <th>Dia da Semana</th>

                                <th>Café da Manhã</th>

                                <th>Almoço</th>

                                <th>Lanche da Tarde</th>

                                <th>Jantar</th>

                                <th>Ceia</th>

                            </tr>

                        </thead>


                        <tbody>

                            ${dias.map(function (dia) {

                                return `

                                    <tr>

                                        <th>${dia}</th>

                                        <td
                                            data-dia="${dia}"
                                            data-refeicao="cafe">
                                        </td>

                                        <td
                                            data-dia="${dia}"
                                            data-refeicao="almoco">
                                        </td>

                                        <td
                                            data-dia="${dia}"
                                            data-refeicao="lanche">
                                        </td>

                                        <td
                                            data-dia="${dia}"
                                            data-refeicao="jantar">
                                        </td>

                                        <td
                                            data-dia="${dia}"
                                            data-refeicao="ceia">
                                        </td>

                                    </tr>

                                `;

                            }).join("")}

                        </tbody>

                    </table>

                </div>

            </div>

        `;

    }

}