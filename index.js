let counterEl = document.getElementById("counter-el1")
let counterEl2 = document.getElementById("counter-el2")
let saveEl = document.getElementById('save-el')
let count1 = 0
let count2 = 0
counterEl.textContent = 0
counterEl2.textContent = 0
function b1(){
    count1 += 1
    counterEl.textContent = count1
}
function b2(){
    count1 += 3
    counterEl.textContent = count1
}
function b3(){
    count1 += 5
    counterEl.textContent = count1
}
function b4(){
    count2 += 1
    counterEl2.textContent = count2
}
function b5(){
    count2 += 3
    counterEl2.textContent = count2
}
function b6(){
    count2 += 5
    counterEl2.textContent = count2
}

function save() {
    count1 = 0
    count2 = 0
    counterEl.textContent = count1
    counterEl2.textContent = count2
}