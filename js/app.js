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

    //let lista = document.getElementById('lista-produtos');

    //calcular o preço, o nosso subtotal
    //adicionar no carrinho
    //atualizar o valor total da compra
    
    if (quantidade.value.length == 0) {
        window.alert('Informe a quantidade a ser adicionada');
    } else {
        window.alert('Informe a quantidade a ser adicionada');
    }
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}