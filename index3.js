var request = new XMLHttpRequest()
request.open('GET', 'https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple', true)
request.onload = function () {
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    console.log(data)
    quiz=data.results
    questionair=document.getElementById("questionair")
    for (let i = 0; i < quiz.length; i++) {
      questionair.innerHTML+=`
      <div style="font-size:large ; font-weight: 700">${"Question "+(i+1)+":"}</div>
      <div>${quiz[i].question} </div>
      <div>
      <button style="color : green">${quiz[i].correct_answer}</button>
      <button>${quiz[i]["incorrect_answers"][0]}</button>
      <button>${quiz[i]["incorrect_answers"][1]}</button>
      <button>${quiz[i]["incorrect_answers"][2]}</button>
      </div>
      `
    }
  } else {
    console.log('error')
  }
}
request.send()