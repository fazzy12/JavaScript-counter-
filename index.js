const count = document.getElementById('counter')
const increase = document.getElementById('plus')
const decrease = document.getElementById('minus')

let counter = 0

function color(){
    if (counter < 0){
        count.style.color = 'red'
    }else{
        count.style.color = 'black'
    }

    return
}

function increment() {
    color()
    count.textContent = counter
    counter++
    return 
}
function decreament() {
    color()
    count.textContent = counter
    counter--
    return 
}

increase.addEventListener('click', () => {
    increment()
})

decrease.addEventListener('click', () => {
    decreament()
})


