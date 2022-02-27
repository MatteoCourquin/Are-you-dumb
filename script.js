const btnNo = document.querySelector('.btn-no')
const btnYes = document.querySelector('.btn-yes')
const buttons = document.querySelector('.buttons')
const message = document.querySelector('.message')

btnYes.addEventListener('click', () => {
    message.style.display = "block"
    buttons.style.display = "none"
})
function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let positionRight;
let positionTop;
function changePosition(positionTop, positionRight) {
    positionTop = entierAleatoire(0, 90)
    positionRight = entierAleatoire(3, 30)
    btnNo.style.top = `${positionTop}%`
    btnNo.style.right = `${positionRight}%`
}
btnNo.addEventListener('click', () => {
    changePosition(positionTop, positionRight)
})
