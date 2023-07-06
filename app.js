let input = document.getElementById('input')
function setValue(num) {
    input.value = input.value+num
}

function Calculate() {
    input.value = eval(input.value)
}
function allClear(){
    input.value =""
}
function lastClear(){
    input.value = input.value.slice(0,-1)
}