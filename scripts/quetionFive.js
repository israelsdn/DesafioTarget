function QuestionFive(){
    let word = document.getElementById('QuestionFive').value
    const element = document.getElementById('responseFive')
    let wordArray = word.split('')
    let contador = wordArray.length
    let respArray = []

    for(i = contador -1; i >= 0; i--){
        respArray.push(wordArray[i])
    }

    element.innerHTML = respArray.join("")
}