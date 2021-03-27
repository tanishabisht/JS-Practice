var add = document.getElementById('add')
var task_inp = document.getElementById('task_inp')
var items = document.getElementById('items')

add.addEventListener('click', function(){
    var item = document.createElement('div')
    item.classList.add('task')
    item.innerText = task_inp.value
    items.appendChild(item)
    task_inp.value = ''

    item.addEventListener('click', function(){
        item.style.textDecoration = 'line-through'
    }, false)

    item.addEventListener('dblclick', function(){
        items.removeChild(item)
    }, false)
}, false)