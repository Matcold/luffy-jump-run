const luffy = window.document.querySelector('.luffy')
const barril = window.document.querySelector('.barril')

const jump = () => {

    luffy.classList.add('jump')

    setTimeout(() => {

        luffy.classList.remove('jump')

    }, 700)
}

const loop = setInterval(() => {
 
    const barrilPosition = barril.offsetLeft
    const luffyPosition = +window.getComputedStyle(luffy).bottom.replace('px', '')

    if (barrilPosition <= 80 && barrilPosition > 0 && luffyPosition < 50) {

        barril.style.animation = 'none'
        barril.style.left = `${barrilPosition}px`

        luffy.style.animation = 'none'
        luffy.style.bottom = `${luffyPosition}px`

        luffy.src = './IMG/exploud.gif' 
        luffy.style.width = '100px'
        
    }  

}, 10)

window.document.addEventListener('keydown', jump)
