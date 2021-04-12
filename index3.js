var request = new XMLHttpRequest()
request.open('GET', 'https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple', true)
quiz={}
request.onload = function () {
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    console.log(data)
    
  } else {
    console.log('error')
  }
}
request.send()