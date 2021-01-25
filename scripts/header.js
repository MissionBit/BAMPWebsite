function showNavModal() {
    const navModal = document.getElementById('navModal')
    navModal.classList.add('navModal-is-shown')
    document.body.classList.add('l-noScroll')
}

function hideNavModal() {
    const navModal = document.getElementById('navModal')
    navModal.classList.remove('navModal-is-shown')
    document.body.classList.remove('l-noScroll')
}

const hamburgerBtn = document.getElementById('hamburger')
hamburgerBtn.addEventListener('click', showNavModal)
const closeNavModalBtn = document.getElementById('closeNavModal')
closeNavModalBtn.addEventListener('click', hideNavModal)
const getUpdates = document.getElementById('getUpdates')
getUpdates.addEventListener('click', hideNavModal)
