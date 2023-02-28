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
    
    if(x <= 5){
        let fibTempArray = [...fibonacci(10)]
        fibTempArray.find(num => num == x) ? alert("Está Presente na Sequência de Fibonacci") : alert(" Não Está Presente na Sequência de Fibonacci")
    } else {
        fiboArray.find(num => num == x) ? alert("Está Presente na Sequência de Fibonacci") : alert(" Não Está Presente na Sequência de Fibonacci")
    }
}