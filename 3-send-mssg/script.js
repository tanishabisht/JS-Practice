var submit = document.getElementById('submit')

// console.log(mssg, prevmssg)
submit.addEventListener('click', function(e){
    var mssg = document.getElementById('mssg')
    var prevmssg = document.getElementById('prevmssg')
    var warning = document.getElementById('warning')
    if(mssg.value){
        warning.style.visibility = 'hidden'
        prevmssg.innerHTML = mssg.value
        mssg.value = ''
    } else {
        prevmssg.innerHTML = ''
        warning.style.visibility = 'visible'
    }
}, false)