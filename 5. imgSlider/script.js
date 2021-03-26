var image = document.getElementById('image')
var front = document.getElementById('front')
var back = document.getElementById('back')

images = ['./Images/1.jpg', './Images/2.jpg', './Images/3.jpg', './Images/4.jpg' ]

var i = 0

front.addEventListener('click', function(e){
    i = (i<images.length-1) ? i+1 : 0    
    image.setAttribute('src', images[i])
}, false)

back.addEventListener('click', function(e){
    i = (i>0) ? i-1 : images.length-1
    image.setAttribute('src', images[i])
}, false)