function showNavModal() {
    const navModalBtn = document.getElementById('navModal')
    navModalBtn.classList.add('navModal-is-shown')
}

function hideNavModal() {
    console.log("showsomethoing")
    const navModalBtn = document.getElementById('navModal')
    navModalBtn.classList.remove('navModal-is-shown')
}

const hamburgerBtn = document.getElementById('hamburger')
hamburgerBtn.addEventListener('click', showNavModal)
const closeBtn = document.getElementById('closeNavModal')
closeBtn.addEventListener('click', hideNavModal)
