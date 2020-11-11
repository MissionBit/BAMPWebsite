function showMuralModal() {
    console.log('bruh')
    const muralModalContainer = document.getElementById('muralModalContainer')
    muralModalContainer.classList.add('muralModalContainer-is-shown')
}

function hideMuralModal() {
    const muralModalContainer = document.getElementById('muralModalContainer')
    muralModalContainer.classList.remove('muralModalContainer-is-shown')
}

const openMuralModalBtn = document.getElementById('openMuralModal')
openMuralModalBtn.addEventListener('click', showMuralModal)
const closeMuralModalBtn = document.getElementById('closeMuralModal')
closeMuralModalBtn.addEventListener('click', hideMuralModal)

const modal = document.querySelector('.muralModal[data-mural-name="lodestar"]')
