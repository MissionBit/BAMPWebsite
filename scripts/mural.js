function showMuralModalContainer(event) {
    console.log(event.target)
    const muralModalContainer = document.getElementById('muralModalContainer')
    muralModalContainer.classList.add('muralModalContainer-is-shown')
}

function hideMuralModalContainer(event) {
    const muralModalContainer = document.getElementById('muralModalContainer')
    muralModalContainer.classList.remove('muralModalContainer-is-shown')
}


const thumbnails = document.querySelectorAll('.muralThumbnail')
console.log(thumbnails)
for (const thumbnail of thumbnails) {
    thumbnail.addEventListener('click', showMuralModalContainer)
}

const modal = document.querySelectorAll('.muralModal')
console.log(modal)

// const closeBtns = document.querySelectorAll('.closeMuralModal')
// closeBtns.addEventListener('click', hideMuralModalContainer)
// const modal = document.querySelector('.muralModal[data-mural-name="lodestar"]')
