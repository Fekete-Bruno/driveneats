const button = document.querySelector(".carrinho");
button.disable = true;
let primeira;
let segunda;
let terceira;
let total = 0;
let contador = 0; 

function select(item){
    let categoria = "." + item.classList[0];
    let jaSelecionado = document.querySelector(categoria + ".selecionado");

    if(jaSelecionado !== null){
        jaSelecionadoPreco = document.querySelector(categoria + ".selecionado" + " .preco").innerHTML;
        calcTotal("-", jaSelecionadoPreco);
        jaSelecionado.classList.remove("selecionado");
    }
    item.classList.add("selecionado")

    tentaAtivarBotao();
    adicionarAoPedido(categoria);
}

function adicionarAoPedido(categoria){
    let itemNomePedido = document.querySelector(".itensPedido " + categoria + " > .nome");
    let itemPrecoPedido = document.querySelector(".itensPedido " + categoria + " > .preco");

    itemNomePedido.innerHTML = document.querySelector(categoria + ".selecionado" + " > .nome").innerHTML;
    itemPrecoPedido.innerHTML = document.querySelector(categoria + ".selecionado" + " > .estiloPreco" + " > .preco").innerHTML;
    
    adicionarNomeAMensagem(itemNomePedido.innerHTML, categoria);
    calcTotal("+", itemPrecoPedido.innerHTML);
}

function adicionarNomeAMensagem(itemNome, categoria) {
    if (categoria === ".primeira") {
      primeira = itemNome;
    } else if (categoria === ".segunda") {
      segunda = itemNome;
    } else {
      terceira = itemNome;
    }
  }

  function calcTotal(operador, preco) {
    let confirmarTotal = document.querySelector(".totalPedido");
    preco = preco.replace(",", ".");
    preco = Number(preco);
  
    if (operador === "+") {
      total += preco;
    } else {
      total -= preco;
    }

    let novoTotal = total.toFixed(2);
    confirmarTotal.innerHTML = novoTotal.replace(".", ",");
  }

  function enviarMensagem() {
    let mensagem = encodeURIComponent(
     `Olá, gostaria de fazer o pedido: \n - Prato: ${primeira} \n - Bebida: ${segunda} \n - Sobremesa: ${terceira} \n Total: R$ ${total.toFixed(2)} \n`
    );
    window.open(`https://wa.me/5511999670346?text=${mensagem}`, "_self");
  }

function tentaAtivarBotao() {
    if (
      document.querySelector(".primeira .opcao .selecionado") !== null &&
      document.querySelector(".segunda .opcao .selecionado") !== null &&
      document.querySelector(".terceira .opcao .selecionado") !== null
    ) {
      button.disable = false;
      button.classList.add("ativo");
      button.innerHTML = "Fechar Pedido";
    }

  }
function ativarJanela() {
    document.querySelector(".confirmarPedido").classList.toggle("ativado");
  }