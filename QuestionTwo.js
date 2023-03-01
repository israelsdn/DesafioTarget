//Questão dois

const fibonacci = (valor) => {
    let prev = 0
    let curr = 1
    let next = 0
    let fiboArray = []

    for(let i = 0; i < valor; i++){
        fiboArray.push(next)
        prev = curr + next
        curr = next
        next = prev
    }

    return fiboArray
}

function QuestionTwo(){
    let x = document.getElementById('QuestionTwo').value
    let fiboArray = [...fibonacci(x)]
    const element = document.getElementById('responseTwo')
    
    if(x <= 5){
        let fibTempArray = [...fibonacci(10)]
        fibTempArray.find(num => num == x) ? element.innerHTML = "Está Presente na Sequência de Fibonacci" : element.innerHTML = " Não Está Presente na Sequência de Fibonacci"
    } else {
        fiboArray.find(num => num == x) ? element.innerHTML = "Está Presente na Sequência de Fibonacci" : element.innerHTML = "Não Está Presente na Sequência de Fibonacci"
    }
}