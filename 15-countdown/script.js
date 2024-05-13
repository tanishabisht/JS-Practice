var end = document.getElementById('end')
var day = document.getElementById('day')
var hrs = document.getElementById('hrs')
var min = document.getElementById('min')
var sec = document.getElementById('sec')


var currentDate = new Date()
var counterDate = new Date(end.value)
var diffTime = new Date(counterDate - currentDate)
day.textContent = diffTime.getDate()
hrs.textContent = diffTime.getHours()
min.textContent = diffTime.getMinutes()
sec.textContent = diffTime.getSeconds()


setInterval(function(){
    var currentDate = new Date()
    var diffTime = new Date(counterDate - currentDate)
    day.textContent = diffTime.getDate()
    hrs.textContent = diffTime.getHours()
    min.textContent = diffTime.getMinutes()
    sec.textContent = diffTime.getSeconds()
}, 1000)