let pessoas = [];

function salvarPessoa() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;

    const pessoa = { nome, email, telefone };
    pessoas.push(pessoa);

    atualizarTabela();
}

function atualizarTabela() {
    const tableBody = document.getElementById("tabelaPessoas");
    tableBody.innerHTML = "";

    pessoas.forEach(pessoa => {
        const row = tableBody.insertRow();
        row.insertCell(0).innerText = pessoa.nome;
        row.insertCell(1).innerText = pessoa.email;
        row.insertCell(2).innerText = pessoa.telefone;
    });
}

async function sincronizar() {
    for (let pessoa of pessoas) {
        try {
            const response = await axios.post('https://660e1c816ddfa2943b35c5c1.mockapi.io/api/v1/testeapi', pessoa);

            if (response.status === 201) {
                console.log(`Pessoa ${pessoa.nome} sincronizada com sucesso.`);
            } else {
                console.error(`Erro ao sincronizar pessoa ${pessoa.nome}.`);
            }
        } catch (error) {
            console.error(`Erro ao sincronizar pessoa ${pessoa.nome}: ${error.message}`);
        }
    }
}
