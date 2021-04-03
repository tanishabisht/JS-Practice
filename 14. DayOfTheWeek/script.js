var day = document.getElementById('day')
var tagline = document.getElementById('tagline')

dayTagVar = [
    {day:'Monday', tagline:'Good morning kids!'},
    {day:'Tuesday', tagline:'This is second day of the week!'},
    {day:'Wednesday', tagline:'Third frikin day of the week'},
    {day:'Thursday', tagline:'Forth day!!'},
    {day:'Friday', tagline:'5th day'},
    {day:'Saturday', tagline:'Time to party!!'},
    {day:'Sunday', tagline:'7th day'}
]

var date = new Date()
var dayVar = date.getDay()
day.textContent = dayTagVar[dayVar-1]['day']
tagline.textContent = dayTagVar[dayVar-1]['tagline']