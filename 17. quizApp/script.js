var queAndContainer = document.getElementById('queAndContainer')
var nextBtn = document.getElementById('next')

var qa = [
  {que: 'What is the adult of a kid called?', ans: ['calf', 'doe', 'goat', 'chick'], right: 'chick'},
  {que: 'What is the young of buffalo called?', ans: ['calf', 'baby', 'cuff', 'cow'], right: 'calf'},
  {que: 'What is a baby alligator called?', ans: ['gator', 'baby', 'calf', 'hatchling'], right: 'hatchling'},
  {que: 'What is a baby goose called?', ans: ['gooser', 'gosling', 'gup', 'pup'], right: 'gup'},
  {que: 'What is a baby goose called?', ans: ['baby', 'infant', 'kit', 'larva'], right: 'infant'}
]




var i = 0
queAndContainer.innerHTML = `
  <h3 class="quote" id="que">${qa[i]['que']}</h3>
  <p class="author"><input type="radio" name="option" value="${qa[i]['ans'][0]}"/> ${qa[i]['ans'][0]}</p>
  <p class="author"><input type="radio" name="option" value="${qa[i]['ans'][1]}"/> ${qa[i]['ans'][1]}</p>
  <p class="author"><input type="radio" name="option" value="${qa[i]['ans'][2]}"/> ${qa[i]['ans'][2]}</p>
  <p class="author"><input type="radio" name="option" value="${qa[i]['ans'][3]}"/> ${qa[i]['ans'][3]}</p>
`




var score = 0
nextBtn.addEventListener('click', function(e){
  if(i<qa.length-1){
    radioBtns = document.querySelectorAll('input')
    var selected = 'null'
    radioBtns.forEach(btn => {
      if(btn.checked) selected = btn.value
    })
    if(qa[i]['right'] == selected) score += 10
    else score -= 5
    i++
    queAndContainer.innerHTML = `
      <h3 class="quote" id="que">${qa[i]['que']}</h3>
      <p class="author"><input type="radio" name="option" value="${qa[i]['ans'][0]}"/> ${qa[i]['ans'][0]}</p>
      <p class="author"><input type="radio" name="option" value="${qa[i]['ans'][1]}"/> ${qa[i]['ans'][1]}</p>
      <p class="author"><input type="radio" name="option" value="${qa[i]['ans'][2]}"/> ${qa[i]['ans'][2]}</p>
      <p class="author"><input type="radio" name="option" value="${qa[i]['ans'][3]}"/> ${qa[i]['ans'][3]}</p>
    `
  } else{
    radioBtns = document.querySelectorAll('input')
    var selected = 'null'
    radioBtns.forEach(btn => {
      if(btn.checked) selected = btn.value
    })
    if(qa[i]['right'] == selected) score += 10
    else score -= 5
    queAndContainer.innerHTML = `<h3 class="quote">MARKS SCORED ARE: ${score}</h3>`
  }
  
})