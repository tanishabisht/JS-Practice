var itemBtn = document.getElementById('itemBtn')
var carsBtn = document.getElementById('carsBtn')
var animalsBtn = document.getElementById('animalsBtn')
var fruitsBtn = document.getElementById('fruitsBtn')
var colorsBtn = document.getElementById('colorsBtn')


function filterSelection(c) {
    var items = document.getElementsByClassName('item')
    var category = document.getElementsByClassName(c)
    for(var i=0; i<items.length; i++) items[i].style.display = 'none'
    for(var i=0; i<category.length; i++) category[i].style.display = 'inline-block'
}


itemBtn.addEventListener('click', function(){filterSelection('item')}, false)
carsBtn.addEventListener('click', function(){filterSelection('cars')}, false)
animalsBtn.addEventListener('click', function(){filterSelection('animals')}, false)
fruitsBtn.addEventListener('click', function(){filterSelection('fruits')}, false)
colorsBtn.addEventListener('click', function(){filterSelection('colors')}, false)