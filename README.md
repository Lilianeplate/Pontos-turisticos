# Pontos Turísticos do Brasil

## Descrição
Esta aplicação web permite aos usuários pesquisar por pontos turísticos do Brasil. Ao digitar o nome de um estado ou de um ponto turístico específico, a aplicação exibe uma lista com os resultados correspondentes, apresentando informações como:

* **Título:** Nome do ponto turístico
* **Imagem:** Uma imagem representativa do local
* **Descrição:** Uma breve descrição do ponto turístico
* **Estado:** O estado onde o ponto turístico está localizado
* **Link:** Um link para mais informações sobre o local
  
## Link do projeto
[https://pontos-turisticos-eight.vercel.app/]

## Tecnologias Utilizadas
* **HTML:** Estrutura básica da página web.
* **CSS:** Estilização da página, definindo layout, cores, fontes e responsividade para diferentes dispositivos.
* **JavaScript:** Lógica da aplicação, responsável por realizar a pesquisa, manipular o DOM e exibir os resultados.
* **Google Fonts:** Importação de fontes personalizadas para a página.

### Como Funciona
1. **Pesquisa:**
   * O usuário insere o nome de um ponto turístico ou de um estado no campo de pesquisa.
   * Ao clicar no botão "Pesquisar", a aplicação inicia uma busca nos dados previamente cadastrados.
2. **Processamento:**
   * A aplicação compara o termo de pesquisa com os títulos e estados de cada ponto turístico armazenado em um arquivo JavaScript.
3. **Exibição de Resultados:**
   * Os resultados encontrados são apresentados em uma lista.

## Estrutura do Projeto
* **index.html:** Contém a estrutura básica da página web.
* **style.css:** Define o estilo visual da aplicação.
* **script.js:** Contém a lógica JavaScript para a pesquisa e a interação com o usuário.
* **dados.js:** Armazena os dados dos pontos turísticos, como nome, descrição, imagem e localização.

