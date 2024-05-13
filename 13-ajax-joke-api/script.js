var joke = document.getElementsByClassName('joke')[0]
var btn = document.getElementsByClassName('btn')[0]
joke.textContent = "Chuck Norris has only one fear...that's why there are no mirrors in his house"

btn.addEventListener('click', function(){
    fetch('https://api.chucknorris.io/jokes/random')
    .then(res => res.json())
    .then(json => {
        joke.textContent = json.value
    })
}, false)