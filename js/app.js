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
    console.log(quantidade.value);
    console.log(nomeProduto);
    console.log(valorUnitario);
    let preco = quantidade.value * valorUnitario;
    console.log(preco);

    let lista = document.getElementById('lista-produtos');

    //calcular o preço, o nosso subtotal
    //adicionar no carrinho
    //atualizar o valor total da compra
    
    if (quantidade.value.length == 0) {
        window.alert('Informe a quantidade a ser adicionada');
    } else {
        console.log('------');
        /*
        console.log(quantidade.value);
        console.log(nomeProduto);
        console.log(valorUnitario);*/
    }
}

function limpar() {

}