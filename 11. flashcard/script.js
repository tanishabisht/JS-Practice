var add = document.getElementById('add')
var queInp = document.getElementById('queInp')
var ansInp = document.getElementById('ansInp')
var items = document.getElementById('items')

add.addEventListener('click', function(){
    var item = document.createElement('div')
    item.classList.add('card')

    var questionEl = document.createElement('h4')
    questionEl.innerText = queInp.value
    item.appendChild(questionEl)

    var answerEl = document.createElement('p')
    item.classList.add('showToggle')
    answerEl.innerText = ansInp.value
    item.appendChild(answerEl)

    items.appendChild(item)

    queInp.value = ''
    ansInp.value = ''

    item.addEventListener('click', function(){
        if(answerEl.style.display == 'none') answerEl.style.display = 'inherit'
        else answerEl.style.display = 'none'
    }, false)

    item.addEventListener('dblclick', function(){
        items.removeChild(item)
    }, false)
}, false)