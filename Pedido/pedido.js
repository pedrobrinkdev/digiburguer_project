// Selecionar elementos importantes
const listaPedido = document.getElementById("lista-pedido");
const totalEl = document.getElementById("total");
const btnFinalizar = document.getElementById("btn-finalizar");
const msgPedido = document.getElementById("msg-pedido");

let total = 0;

// ---------------------- ADICIONAR PRODUTOS ----------------------
document.querySelectorAll(".btn-add").forEach(btn => {
    btn.addEventListener("click", () => {
        const produto = btn.parentElement;

        const nome = produto.dataset.nome;
        const preco = parseFloat(produto.dataset.preco);
        const img = produto.dataset.img;

        // Criar elemento do item no pedido
        const item = document.createElement("div");
        item.classList.add("item-pedido");

        item.innerHTML = `
            <img src="${img}" alt="${nome}">
            <span>${nome} - R$ ${preco.toFixed(2)}</span>
            <button class="btn-remove">X</button>
        `;

        // Adicionar no DOM
        listaPedido.appendChild(item);

        // Atualizar total
        total += preco;
        atualizarTotal();

        // Remover item ao clicar
        item.querySelector(".btn-remove").addEventListener("click", () => {
            listaPedido.removeChild(item);
            total -= preco;
            atualizarTotal();
        });
    });
});

// ---------------------- ATUALIZAR TOTAL ----------------------
function atualizarTotal() {
    totalEl.textContent = "R$ " + total.toFixed(2); //o tofixed 2 faz com que o html retorne com duas casas decimais
}

// ---------------------- FINALIZAR PEDIDO ----------------------
btnFinalizar.addEventListener("click", () => {

    if (listaPedido.children.length === 0) {
        alert ("Adicione produtos ao pedido antes de finalizar");
        return;
    }

    alert ("Pedido finalizado com sucesso!");

    // Opcional: limpar depois de finalizar
    listaPedido.innerHTML = "";
    total = 0;
    atualizarTotal();
});
