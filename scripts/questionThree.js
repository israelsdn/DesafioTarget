function QuestionThree(){
    const distribuidoras = [["SP", 67836.43], ["RJ", 36678.66], ["MG", 29229.88], ["ES", 27165.48], ["OUTROS", 19849.53]]
    const element = document.getElementById('responseThree')
    element.innerHTML = ""
    var valorTotal = 0
    let porcentagem

    for (i in distribuidoras) {
        valorTotal += distribuidoras[i][1]
    }

    for (i in distribuidoras) {
        porcentagem = (distribuidoras[i][1] / valorTotal) * 100
        element.innerHTML += "<div>"+distribuidoras[i][0]+":"+ porcentagem.toFixed(2)+"%</div>"
    }
}