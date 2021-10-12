const up = document.querySelector('.sizeUp')
const down = document.querySelector('.sizeDown')
const color = document.querySelector('.color')
const p = document.querySelector('p')

let fontSize = 36

const increase = () => {
    fontSize += 5
    p.style.fontSize = fontSize + 'px'
}

const reduce = () => {
    if(fontSize <= 21) return
    fontSize -= 5
    p.style.fontSize = fontSize + 'px'
}

const colorChange = () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    p.style.color = `rgb(${r},${g},${b})`;
}


up.addEventListener('click', increase)
down.addEventListener('click', reduce)
color.addEventListener('click', colorChange)




