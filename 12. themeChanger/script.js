var theme1 = document.getElementById('theme1')
var theme2 = document.getElementById('theme2')
var theme3 = document.getElementById('theme3')


theme1.addEventListener('click', function(){
    document.documentElement.style.setProperty('--bodyColor', '#fff')
    document.documentElement.style.setProperty('--themeColor', '#333')
    document.documentElement.style.setProperty('--themeColorClick', '#222')
    document.documentElement.style.setProperty('--bgColorNo1', '#ff9aa2')
    document.documentElement.style.setProperty('--bgColorNo2', '#e2f0cb')
    document.documentElement.style.setProperty('--bgColorNo3', '#b5ead7')
    document.documentElement.style.setProperty('--bgColorNo4', '#ffc8a2')
    document.documentElement.style.setProperty('--colorNo1', '#af6a70')
    document.documentElement.style.setProperty('--colorNo2', '#95a183')
    document.documentElement.style.setProperty('--colorNo3', '#739b8b')
    document.documentElement.style.setProperty('--colorNo4', '#947157')
}, false)


theme2.addEventListener('click', function(){
    document.documentElement.style.setProperty('--bodyColor', '#FFFef2')
    document.documentElement.style.setProperty('--themeColor', '#333')
    document.documentElement.style.setProperty('--themeColorClick', '#222')
    document.documentElement.style.setProperty('--bgColorNo1', '#e27d60')
    document.documentElement.style.setProperty('--bgColorNo2', '#e8a87c')
    document.documentElement.style.setProperty('--bgColorNo3', '#c38d9e')
    document.documentElement.style.setProperty('--bgColorNo4', '#41b3a3')
    document.documentElement.style.setProperty('--colorNo1', '#ffbeab')
    document.documentElement.style.setProperty('--colorNo2', '#ffe1cc')
    document.documentElement.style.setProperty('--colorNo3', '#ffdee8')
    document.documentElement.style.setProperty('--colorNo4', '#d3ebe7')
}, false)


theme3.addEventListener('click', function(){
    document.documentElement.style.setProperty('--bodyColor', '#0b0c10')
    document.documentElement.style.setProperty('--themeColor', '#666')
    document.documentElement.style.setProperty('--themeColorClick', '#555')
    document.documentElement.style.setProperty('--bgColorNo1', '#1f2833')
    document.documentElement.style.setProperty('--bgColorNo2', '#66fcf1')
    document.documentElement.style.setProperty('--bgColorNo3', '#45a29e')
    document.documentElement.style.setProperty('--bgColorNo4', '#c5c6c7')

    document.documentElement.style.setProperty('--colorNo1', '#ffbeab')
    document.documentElement.style.setProperty('--colorNo2', '#4ab0a8')
    document.documentElement.style.setProperty('--colorNo3', '#ffdee8')
    document.documentElement.style.setProperty('--colorNo4', '#d3ebe7')
}, false)
