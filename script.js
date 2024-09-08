function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    console.log(section); // Linha para depuração, verifica se a seção foi encontrada

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (campoPesquisa == "") {
        alert("Nada foi encontrado! Você não digitou nada!")
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()


    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let estado = "";

    // Itera sobre cada ponto turístico no array 'pontosTuristicos'
    for (let dado of pontosTuristicos) {
        titulo = dado.titulo.toLocaleLowerCase()
        estado = dado.estado.toLocaleLowerCase()

        if (titulo.includes(campoPesquisa) || estado.includes(campoPesquisa)) {
            // Constrói o HTML para cada item da pesquisa, formatando os dados do ponto turístico
            resultados += `
            <div class="item-resultado">
                <h2>${dado.titulo}</h2>
                <img src="${dado.imagem}" alt="">
                <p class="descricao-meta">${dado.descricao}</p>
                <p class="estado">${dado.estado}</p>
                <a class="link" href="${dado.link}" target="_blank">Click para mais informações</a>
            </div>
            `;
            }
        }

        if (!resultados) {
            resultados = "<p>Nada foi encontrado!</p>"
        }
        

    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;

    // Calcula a altura total dos resultados
  let resultadosSection = document.getElementById("resultados-pesquisa");
  let totalHeight = resultadosSection.scrollHeight;

  // Define a altura máxima da seção, com um limite mínimo para evitar que a seção fique muito pequena
  let maxHeight = Math.max(totalHeight, 300); // Ajuste o valor 300 conforme necessário
  resultadosSection.style.maxHeight = maxHeight + "px";
}