const linhas = document.querySelectorAll("tbody tr");
const listaPedido = document.getElementById("listaPedido");
const totalSpan = document.getElementById("total");

let total = 0;

linhas.forEach((linha) => {

    linha.addEventListener("click", () => {

        const nome = linha.children[0].textContent;
        const precoTexto = linha.children[1].textContent;

        const preco = parseFloat(
            precoTexto.replace("R$", "").replace(",", ".")
        );

        // adiciona item na lista
        const item = document.createElement("li");
        item.textContent = `${nome} - R$ ${preco.toFixed(2)}`;

        listaPedido.appendChild(item);

        // atualiza total
        total += preco;
        totalSpan.textContent = total.toFixed(2);

    });

});
