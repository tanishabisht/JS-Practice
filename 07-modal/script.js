var imgContainer = document.getElementById('imgContainer')
var items = document.querySelectorAll('.item')
var modalContainer = document.getElementById('modalContainer')
var modal = document.getElementById('modal')
var cross = document.getElementById('cross')


let imageList = []
items.forEach(image => imageList.push(image.src))


items.forEach(item => {
    item.addEventListener('click', function(e){
        modal.setAttribute('src', item.getAttribute('src'))
        modalContainer.style.display = 'inherit'
        imgContainer.style.filter = 'blur(8px)'
    }, false)
})

cross.addEventListener('click', function(){
    modalContainer.style.display = 'none'
    imgContainer.style.filter = 'blur(0px)'
}, false)