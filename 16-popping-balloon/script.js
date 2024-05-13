balloons = document.querySelectorAll('.item')

function checkAllPopped() {
    if(popped==30){
        cardsContainer = document.getElementById('cards')
        cardsContainer.innerHTML = '<h1 class="popped">POPPED!!</h1><p>Congratulations !! <br>All the balloons are popped.</p>'
    }
}

var popped = 0
balloons.forEach(balloon => {
    balloon.addEventListener('mouseover', function(){
        balloon.style.visibility = 'hidden'
        popped++
        checkAllPopped()
    })
})