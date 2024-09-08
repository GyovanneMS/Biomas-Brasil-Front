/**
 * Função para obter o valor de um parâmetro da URL.
 * @param {string} name - Nome do parâmetro a ser obtido.
 * @returns {string|null} - Valor do parâmetro ou null se não encontrado.
 */
function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search); // Obtém os parâmetros da URL
    return urlParams.get(name); // Retorna o valor do parâmetro solicitado
}

// Obtém o nome do bioma da URL usando a função getQueryParam
const bioma = getQueryParam('bioma');

// Substitui '%20' por espaços e converte para minúsculas
let biomaEspaco = bioma.replace(/%20/g, ' ').toLowerCase();

// Define o título da página como o nome do bioma, se o nome do bioma estiver disponível
if (bioma) {
    document.title = `Informações sobre o Bioma: ${bioma}`;
}

// Inicializa variáveis para armazenar o HTML do bioma
let biomaNome = "";
let biomaSite = "";

// Itera sobre cada item no array de dados
for (let dado of dados) {
    biomaNome = dado.bioma.toLowerCase(); // Converte o nome do bioma para minúsculas
    
    // Verifica se o nome do bioma da URL corresponde ao bioma atual no array de dados
    if (biomaNome.includes(biomaEspaco)) {
        // Gera o HTML para os animais usando map e join
        let animaisHtml = dado.animais.map(animal => `
            <div class="item">
                <img src="${animal.imagem}" alt="${animal.nome}">
                <p>${animal.nome}</p>
            </div>
        `).join('');

        // Gera o HTML para as plantas usando map e join
        let plantasHtml = dado.plantas.map(planta => `
            <div class="item">
                <img src="${planta.imagem}" alt="${planta.nome}">
                <p>${planta.nome}</p>
            </div>
        `).join('');

        // Monta o HTML final para o bioma
        biomaSite = `
            <div class="container">
                <div class="content">
                    <h1 class="title">${dado.bioma}</h1>
                    <div class="biome-images">
                        <img src="${dado.imagemNatureza}" alt="Foto do bioma ${dado.bioma}">
                        <img src="${dado.imagemMapa}" alt="Foto dos estados que tem o bioma ${dado.bioma}">
                    </div>
                    <div class="description">
                        <p>${dado.descricaoCompleta}</p>
                        <p>Nosso site ainda está em progresso, então se quiser mais, entre neste site: <a href="${dado.link}">Aqui</a></p>
                        <p>Agradecemos a compreensão <3</p>
                    </div>
                    <div class="item-container">
                        ${animaisHtml}
                        ${plantasHtml}
                    </div>
                </div>
            </div>`;
    }
}

// Atualiza o conteúdo HTML da seção principal com o HTML do bioma encontrado
main.innerHTML = biomaSite;
