// defining a function which adds the "hidden" class to the target element
// the class is defined elsewhere, in CSS
function showNavModal() {
    console.log("showsomething")
    const navModalBtn = document.getElementById('navModal')
    navModalBtn.classList.add('navModal-is-shown')
}

const hamburgerBtn = document.getElementById('hamburger')
hamburgerBtn.addEventListener('click', showNavModal)

function hideNavModal() {
    console.log("showsomethoing")
    const navModalBtn = document.getElementById('navModal')
    navModalBtn.classList.remove('navModal-is-shown')
}

const closeBtn = document.getElementById('close')
closeBtn.addEventListener('click', hideNavModal)
