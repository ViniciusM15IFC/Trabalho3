const preços = [13.99, 29.99, 19.99, 17.99, 25.99, 49.99, 2, 50, 100]
const nomes = ["Revolução dos Bichos", "Sherlock Holmes", "Isaac Newton", "Diário de um Banana", "Expresso do Oriente", "David Copperfield", "marcador", "caneta", "organizador"]
function local() {
    if (localStorage.getItem("hasCodeRunBefore") === null) {
        localStorage.setItem("Revolução dos Bichos", 0)
        localStorage.setItem("Sherlock Holmes", 0)
        localStorage.setItem("Isaac Newton", 0)
        localStorage.setItem("Diário de um Banana", 0)
        localStorage.setItem("Expresso do Oriente", 0)
        localStorage.setItem("David Copperfield", 0)
        localStorage.setItem("hasCodeRunBefore", true);
    }
  }
function Redirecionar(name) {
    document.location.href = name
}
function Comprar(n) {
    var nome = nomes[n]
    var preço = preços[n]
    if (n > 5) {
        var id = 'qtd' + nome
        var quantidade = parseInt(document.getElementById(id).value)
    }
    else {
        var quantidade = 1
    }
    sessionStorage.setItem("Nome", nome)
    sessionStorage.setItem("Preço", preço)
    sessionStorage.setItem("Quantidade", quantidade)
    Redirecionar('form.html')
    Contar(nome)
}
function Info() {
    var nome = sessionStorage.getItem("Nome")
    var preço = sessionStorage.getItem("Preço")
    var quantidade = sessionStorage.getItem("Quantidade")
    var valor = preço * quantidade
    var produto = document.getElementById("nome_produto")
    var quantidade_produto = document.getElementById("quantidade_produto")
    var preço_produto = document.getElementById("preço_produto")
    produto.innerHTML = 'Produto: ' + nome
    quantidade_produto.innerHTML = 'Quantidade: ' + quantidade
    preço_produto.innerHTML = 'Preço Total: ' + valor 
}
function Contar(nome) {
    var num = parseInt(localStorage.getItem(nome))
    var num = num + 1
    localStorage.setItem(nome, num)
}
function MudarValor(n) {
    var id = 'qtd' + nomes[n]
    var id2 = 'btn' + nomes[n]
    var qtd = parseInt(document.getElementById(id).value)
    var preço = preços[n]
    var valor = qtd * preço
    var elemento = document.getElementById(id2)
    elemento.innerHTML = '$' + valor
}

function validarEmail() {
    var email = document.getElementById("idEmail").value
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        alert("Email inválido")
        return false
    }else{
        return true
    }
}
function submitForm() {
    
}