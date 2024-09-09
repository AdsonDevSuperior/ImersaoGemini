function pesquisar() {
    // documento forma usada para pegar os dados do html
    let section = document.getElementById("resultados-pesquisa")
    console.log(section);

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    const regex = /^[a-zA-Z]{4,}$/;

    if (!campoPesquisa) {
        section.innerHTML = "Nada foi encontrado"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    if (!regex.test(campoPesquisa)) {
        section.innerHTML = "Digite apenas letras e mais de 3 caracteres";
        return;
    }
    console.log(campoPesquisa)

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase()

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
        <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="https://ge.globo.com/olimpiadas/guia/2024/07/13/c-rebeca-andrade-idade-altura-medalhas
                -e-historia-da-ginasta.ghtml" target="_blank">Mais
                    informações</a>
            </div>
`;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado. Você precisa digitar o nome do atreta ou esporte</p>"
    }
    section.innerHTML = resultados
}

