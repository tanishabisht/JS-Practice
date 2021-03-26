var counter = document.getElementById('counter')
var sub = document.getElementById('sub')
var add = document.getElementById('add')

function addColor(num, el){
    if(num>0) el.style.color = '#479933'
    else if(num<0) el.style.color = '#b12929'
    else el.style.color = '#566b79'
}

add.addEventListener('click', function(){
    var count = parseInt(counter.innerHTML)
    count += 1
    counter.innerHTML = count
    addColor(count, counter)
}, false)

sub.addEventListener('click', function(){
    var count = parseInt(counter.innerHTML)
    count -= 1
    counter.innerHTML = count
    addColor(count, counter)
}, false)