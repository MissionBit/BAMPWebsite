function showMuralModal() {
    console.log('bruh')
    const muralModalContainer = document.getElementById('muralModalContainer')
    muralModalContainer.classList.add('muralModalContainer-is-shown')
}

function hideMuralModal() {
    const muralModalContainer = document.getElementById('muralModalContainer')
    muralModalContainer.classList.remove('muralModalContainer-is-shown')
}

const openMuralBtn = document.getElementById('openMuralModal')
openMuralBtn.addEventListener('click', showMuralModal)
const closeMuralModalBtn = document.getElementById('closeMuralModal')
closeMuralModalBtn.addEventListener('click', hideMuralModal)

const modal = document.querySelector('.muralModal[data-mural-name="lodestar"]')
