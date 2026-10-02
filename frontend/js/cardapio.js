const botaoSemanal = document.getElementById("botaoSemanal");
const botaoMensal = document.getElementById("botaoMensal");

const cardapioSemanal = document.getElementById("cardapioSemanal");
const cardapioMensal = document.getElementById("cardapioMensal");

const botaoAdicionarAlimento = document.getElementById("botaoAdicionarAlimento");
const campoBusca = document.getElementById("campoBusca");

const alimentosCardapio = [
    {
        id: 1,
        nome: "Arroz Integral"
    },
    {
        id: 2,
        nome: "Feijão Preto"
    },
    {
        id: 3,
        nome: "Peito de Frango"
    },
    {
        id: 4,
        nome: "Salada Verde"
    }
];

botaoAdicionarAlimento.addEventListener("click", function () {

    const nomeDigitado = campoBusca.value;

    const alimentoEncontrado = alimentosCardapio.find(function (alimento) {
        // A função find() é usada para procurar um alimento no array alimentosCardapio que tenha o mesmo nome que o digitado pelo usuário. A função de callback recebe cada alimento do array e compara seu nome com o nome digitado. Se encontrar uma correspondência, retorna o objeto do alimento encontrado.
        return alimento.nome === nomeDigitado;
    });

    // ! = operador de negação, usado para verificar se alimentoEncontrado é falso (ou seja, se o alimento não foi encontrado). Se alimentoEncontrado for falso, o código dentro do bloco if será executado.
    if (!alimentoEncontrado) {
        alert("Alimento não encontrado.");
        return;
    }

    const celula = document.querySelector('[data-dia="Segunda-feira"][data-refeicao="almoco"]');

    celula.textContent = alimentoEncontrado.nome; // Atualiza o conteúdo da célula da tabela com o nome do alimento encontrado

    celula.addEventListener("click", function () {
        celula.textContent = ""; // Limpa o conteúdo da célula da tabela ao clicar nela
    });

});

// ao clicar no botão "Cardápio Semanal", exibe o cardápio semanal
botaoSemanal.addEventListener("click", function () {

    // Exibe o cardápio semanal e oculta o cardápio mensal
    cardapioSemanal.style.display = "block";
    // Oculta o cardápio mensal
    cardapioMensal.style.display = "none"; // oculta o cardápio mensal

    criarTabelaSemanal(); // Chama a função para criar a tabela semanal
});

// Função para criar a tabela semanal
function criarTabelaSemanal() {

    const tabela = document.getElementById("tabelaSemanal");

    const dias = [
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado",
        "Domingo"
    ];

    // Cria o conteúdo HTML da tabela semanal, incluindo o cabeçalho e as linhas para cada dia da semana. A função map() é usada para iterar sobre o array dias e criar uma linha de tabela (<tr>) para cada dia, preenchendo as células da tabela com os dias correspondentes.
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
                        
                        <td data-dia="${dia}" data-refeicao="cafe"></td>
                        <td data-dia="${dia}" data-refeicao="almoco"></td>
                        <td data-dia="${dia}" data-refeicao="lanche"></td>
                        <td data-dia="${dia}" data-refeicao="jantar"></td>
                        <td data-dia="${dia}" data-refeicao="ceia"></td>

                    </tr>
                `;

            }).join("")}

        </tbody>
    `;
}

// ao clicar no botão "Cardápio Mensal", oculta o cardápio semanal
botaoMensal.addEventListener("click", function () {

    // Exibe o cardápio mensal e oculta o cardápio semanal
    cardapioSemanal.style.display = "none";
    // Exibe o cardápio mensal
    cardapioMensal.style.display = "block"; // exibe o cardápio mensal

    criarCardapioMensal(); // Chama a função para criar o cardápio mensal
});

// Função para criar o cardápio mensal
function criarCardapioMensal() {

    const semanasMensais =
        document.getElementById("semanasMensais");

        // Limpa o conteúdo anterior do cardápio mensal antes de criar um novo
    semanasMensais.innerHTML = "";

    // Array com os dias da semana e pique uma lista
    const dias = [
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado",
        "Domingo"
    ];

    // for loop para criar 4 semanas no cardápio mensal. let semana = 1; semana <= 4; semana++ significa que a variável semana começa em 1 e vai até 4, incrementando de 1 em 1 a cada iteração do loop.
    for (let semana = 1; semana <= 4; semana++) {

        // Adiciona o conteúdo HTML para cada semana no cardápio mensal. O operador += é usado para concatenar o novo conteúdo ao conteúdo existente de semanasMensais.innerHTML. A função map() é usada para iterar sobre o array dias e criar uma linha de tabela (<tr>) para cada dia da semana, preenchendo as células da tabela com os dias correspondentes.
        semanasMensais.innerHTML += `
            <div class="semana-mensal">

                <h3>Semana ${semana}</h3>

                <div class= "tabelacardapio">

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
                                    <td data-dia="${dia}" data-refeicao="cafe"></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
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