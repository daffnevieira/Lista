var itens = []

document.getElementById('enviar').addEventListener('click', () => {

    var nomeProduto = document.querySelector('input[name=item]')
    var preço = document.querySelector('input[name=price]')

    itens.push({
        nome: nomeProduto.value,
        valor: preço.value
    })
    let listaProdutos = document.querySelector('.dados-inseridos')
    let total = 0
    listaProdutos.innerHTML = ""
    itens.map(function (val) {
        total += parseFloat(val.valor)
        listaProdutos.innerHTML +=
            `<div class="lista-produto">
                <p>`+ val.nome + `</p>
                <p>R$ `+ val.valor + `</p>
            </div>`

    })
    total = total.toFixed(2)
    nomeProduto.value = ""
    preço.value = ""


    let elementoTotal = document.querySelector('h1')
    elementoTotal.innerHTML = "R$ " + total


})
document.querySelector('button[name=limpar]').addEventListener('click', () => {
    itens = []
    document.querySelector('.dados-inseridos').innerHTML = ""
    document.querySelector('h1').innerHTML = ""
})

