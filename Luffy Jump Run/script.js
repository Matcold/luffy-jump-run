const luffy = window.document.querySelector('.luffy')
const jump = () => {
    luffy.classList.add('jump')
}

window.document.addEventListener('keydown', jump)