const title = document.querySelector('h1')
const btnNo = document.querySelector('.btn-no')
const btnYes = document.querySelector('.btn-yes')
const buttons = document.querySelector('.buttons')
const message = document.querySelector('.message')
let positionRight;
let positionTop;

btnYes.addEventListener('click', () => {
    message.style.display = "block"
    buttons.style.display = "none"
    title.style.display = "none"
})

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function changePosition(positionTop, positionRight) {
    positionTop = randomInt(1, 90)
    positionRight = randomInt(3, 30)
    btnNo.style.top = `${positionTop}%`
    btnNo.style.right = `${positionRight}%`
}
btnNo.addEventListener('click', () => {
    changePosition(positionTop, positionRight)
})
