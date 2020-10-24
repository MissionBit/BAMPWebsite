function showNavModal() {
    const navModal = document.getElementById('navModal')
    navModal.classList.add('navModal-is-shown')
}

function hideNavModal() {
    const navModal = document.getElementById('navModal')
    navModal.classList.remove('navModal-is-shown')
}

const hamburgerBtn = document.getElementById('hamburger')
hamburgerBtn.addEventListener('click', showNavModal)
const closeNavModalBtn = document.getElementById('closeNavModal')
closeNavModalBtn.addEventListener('click', hideNavModal)
