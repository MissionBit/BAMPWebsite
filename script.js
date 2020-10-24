const hamburgerBtn = document.getElementById('hamburger')
hamburgerBtn.addEventListener('click', showNavModal)

const closeNavModalBtn = document.getElementById('closeNavModal')
closeNavModalBtn.addEventListener('click', navModal)

function showNavModal() {
    const navModalBtn = document.getElementById('navModal')
    navModalBtn.classList.add('navModal-is-shown')
}

function navModal() {
    const navModalBtn = document.getElementById('navModal')
    navModalBtn.classList.remove('navModal-is-shown')
}
