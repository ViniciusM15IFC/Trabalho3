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
  function Comprar(name) {
    Redirecionar('form.html')
    var num = parseInt(localStorage.getItem(name))
    var num = num + 1
    localStorage.setItem(name, num)
  }