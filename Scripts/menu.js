let menuDisplay = document.querySelector("#header-navbar-menu")
let menuHamb = document.querySelector("#header-navbar-hamburger")
let menuItem = document.querySelector('li')

function handleButtonClick(){
    menuDisplay.classList.toggle("open")
}

menuHamb.addEventListener("click", handleButtonClick)
menuItem.addEventListener('click', handleButtonClick)
