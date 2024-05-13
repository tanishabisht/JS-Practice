var quote = document.getElementsByClassName('quote')[0]
var author = document.getElementsByClassName('author')[0]
var btn = document.getElementsByClassName('btn')[0]


var sayings = [
  ["Stay Hungry. Stay Foolish.", "Steve Jobs"],
  ["Good Artists Copy, Great Artists Steal.", "Pablo Picasso"],
  ["Argue with idiots, and you become an idiot.", "Paul Graham"],
  ["Be yourself; everyone else is already taken.", "Oscar Wilde"],
  ["Simplicity is the ultimate sophistication.", "Leonardo Da Vinci"]
]

var saying = sayings[Math.floor(Math.random()*5)]
var quoteVar = saying[0]
var authorVar = saying[1]
quote.innerHTML = '<i class="fa fa-quote-left"></i>' + quoteVar
author.innerHTML = authorVar

function generateQuote(){
  saying = sayings[Math.floor(Math.random()*5)]
  quoteVar = saying[0]
  authorVar = saying[1]
  quote.innerHTML = '<i class="fa fa-quote-left"></i>' + quoteVar
  author.innerHTML = authorVar  
}

btn.addEventListener('click', generateQuote, false)