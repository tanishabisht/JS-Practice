// INPUT VALUES
function inpulValue(x){
    var screen = document.getElementById('screen')
    screen.value += x
}
var buttons = document.querySelectorAll('.num')
buttons.forEach(btn => {
    btn.addEventListener('click', function(){inpulValue(btn.innerHTML)}, false)
})



// CANCEL
function delScreen(){
    var screen = document.getElementById('screen')
    screen.value = ''
}
var cancel = document.getElementById('cancel')
cancel.addEventListener('click', delScreen, false)



// EQUAL TO
function finalans(){
    var screen = document.getElementById('screen')    
    try {
        var ans = eval(screen.value)
        screen.value = ans
    }
    catch(err) {screen.value = 'NA'}
}
var equal = document.getElementById('equal')
equal.addEventListener('click', finalans, false)