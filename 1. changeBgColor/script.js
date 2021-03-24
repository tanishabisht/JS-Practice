var btn = document.getElementsByClassName('btn')[0]
var bgColor = document.getElementsByClassName('bgColor')[0]


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function changeColor(){
    var color = 'rgb(' + getRandomInt(255) + ',' + getRandomInt(255) + ',' + getRandomInt(255) + ')'
    bgColor.style.backgroundColor = color
}

btn.addEventListener('click', changeColor, false)