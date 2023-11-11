let totalGeral 
limpar();

function adicionar(){
    //recuperar nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    //o produto vem com a descrição e o valor juntos, dentro de uma string
    //para pegar somente o nome, vamos usar a função split para separar a string no caracter '-'
    //após separar, vamos pegar a primeira parte do texto, que é a que tem o nome, por isso utiliza-se o [0] após a função split
    let nomeProduto = produto.split('-')[0];
    //Para pegar o valor, vamos usar a função split, mas separar pelo texto R$ e pegar o que vem após o R$, que é o valor
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade');
    let preco = quantidade.value * valorUnitario;

    if (quantidade.value.length > 0) {
        //adicionando produto selecionado no carrinho
        let carrinho = document.getElementById('lista-produtos');
        carrinho.innerHTML = carrinho.innerHTML + 
        `<section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidade.value}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`;
        //atualizar o valor total da compra
        totalGeral += preco;
        let campoTotal = document.getElementById('valor-total');
        //como o campoTotal é uma tag de span, da pra mudar o texto dela com o comando textContent
        campoTotal.textContent = `R$ ${totalGeral}`;
        //limpando o campo de quantidade após apertar o botao adicionar
        quantidade.value = '';
    } else {
        window.alert('Informe a quantidade a ser adicionada');
    }
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}