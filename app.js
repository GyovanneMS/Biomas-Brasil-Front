/**
 * Função que pesquisa dados de biomas com base no nome fornecido e atualiza o conteúdo HTML de uma seção.
 */
function pesquisar() {
    // Obtém o valor do campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    campoPesquisa = campoPesquisa.toLowerCase();
    
    // Obtém o elemento HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // se campoPesquisa estiver vazio
    if(!campoPesquisa){
        section.innerHTML = "<p> Campo vazio </p>"

        return ""
    }

    // Inicializa uma string para armazenar o HTML dos resultados
    let biomas = "";
    let bioma = "";
    let descricao = "";
    let animaisLista = "";
    let plantasLista = "";
    
    // Itera sobre cada item no array de dados
    for (let dado of dados) {
        bioma = dado.bioma.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        // Verifica se o título do dado inclui o texto pesquisado
        if (bioma.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            // Concatena os nomes dos animais e plantas
            animaisLista = dado.animais.map(animal => animal.nome).join(' | ');
            plantasLista = dado.plantas.map(planta => planta.nome).join(' | ');
            // Concatena o HTML do item encontrado à string 'biomas'
            biomas += `
            <div class="item-resultado">
                <h2>
                    <a href="bioma.html?bioma=${encodeURIComponent(dado.bioma)}" target="_blank">${dado.bioma}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <h3> Vamos conhecer um pouquinho mais sobre quais os animais e plantas o bioma tem? </h3>
                <h4> Animais </h4>
                <p> ${animaisLista}|</p>
                <h4> plantas </h4>
                <p>${plantasLista}|</p>
                <a href="${dado.link}"
                    target="_blank">|Site do IBAMA/National Geografic do bioma escolhido|</a>
            </div>`;
        }
    }
    if(!biomas){
        biomas = "<p>Nenhum bioma encontrado<p>"
    }

    // Atualiza o conteúdo HTML da seção com o HTML dos resultados encontrados
    section.innerHTML = biomas;
}
