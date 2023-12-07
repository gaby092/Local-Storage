 function inserirJoia() {
    var nome = document.getElementById("nome").value;
    var tipo = document.getElementById("tipo").value;
    var material = document.getElementById("material").value;
    var marca = document.getElementById("marca").value;
    var preco = document.getElementById("preco").value;
    var disponibilidade = document.getElementById("disponibilidade").value;

    if (nome && tipo && material && marca && preco && disponibilidade) {
        var joia = { nome, tipo, material, marca, preco, disponibilidade };

        var joias = JSON.parse(localStorage.getItem("joias")) || [];

        joias.push(joia);

        localStorage.setItem("joias", JSON.stringify(joias));

        atualizarTabela();

        document.getElementById("joiaForm").reset();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

function excluirJoia(index) {
    var joias = JSON.parse(localStorage.getItem("joias")) || [];
    joias.splice(index, 1);
    localStorage.setItem("joias", JSON.stringify(joias));
    atualizarTabela();
}

function atualizarTabela() {
    var joias = JSON.parse(localStorage.getItem("joias")) || [];
    var tabela = document.getElementById("joiaTable");

    tabela.innerHTML = "<tr><th>Nome</th><th>Tipo</th><th>Material</th><th>Marca</th><th>Preço</th><th>Disponibilidade</th><th>Ação</th></tr>";

    for (var i = 0; i < joias.length; i++) {
        var joia = joias[i];

        var row = tabela.insertRow(-1);
        var cellNome = row.insertCell(0);
        var cellTipo = row.insertCell(1);
        var cellMaterial = row.insertCell(2);
        var cellMarca = row.insertCell(3);
        var cellPreco = row.insertCell(4);
        var cellDisponibilidade = row.insertCell(5);
        var cellAcao = row.insertCell(6);

        cellNome.innerHTML = joia.nome;
        cellTipo.innerHTML = joia.tipo;
        cellMaterial.innerHTML = joia.material;
        cellMarca.innerHTML = joia.marca;
        cellPreco.innerHTML = joia.preco;
        cellDisponibilidade.innerHTML = joia.disponibilidade;
        cellAcao.innerHTML = `<button onclick="excluirJoia(${i})">Excluir</button>`;
    }
}

window.onload = atualizarTabela;