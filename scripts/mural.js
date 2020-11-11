function showMuralModalContainer() {
    console.log('helllllooooo')
    const muralModalContainer = document.getElementById('muralModalContainer')
    muralModalContainer.classList.add('muralModalContainer-is-shown')
}

function hideMuralModalContainer() {
    const muralModalContainer = document.getElementById('muralModalContainer')
    muralModalContainer.classList.remove('muralModalContainer-is-shown')
}

const openMuralModalBtn = document.getElementById('openMuralModal')
openMuralModalBtn.addEventListener('click', showMuralModalContainer)
const closeMuralModalBtn = document.getElementById('closeMuralModal')
closeMuralModalBtn.addEventListener('click', hideMuralModalContainer)

// const modal = document.querySelector('.muralModal[data-mural-name="lodestar"]')
