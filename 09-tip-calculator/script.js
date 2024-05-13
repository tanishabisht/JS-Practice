function calculate(){
    var cost = document.getElementById('cost')
    var peopleNum = document.getElementById('peopleNum')
    var service = document.getElementById('service')

    var tipAmt = cost.value*service.value / 100
    var totalAmt = cost.value + tipAmt
    var perPerson = totalAmt / peopleNum.value

    var tip = document.getElementById('tip')
    tip.innerHTML = `
        <p>Tip Amount: <span class='ans'>${tipAmt}</span></p>
        <p>Total Amount: <span class='ans'>${totalAmt}</span></p>
        <p>Each person owes: <span class='ans'>${perPerson}</span></p>
    `
}

var btn = document.getElementById('calc')
btn.addEventListener('click', calculate, false)