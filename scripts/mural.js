function showMuralModalContainer(event) {
    const thumbnail = event.target.closest('.muralThumbnail[data-mural-name]')
    const muralName = thumbnail.dataset.muralName
    const modal = document.querySelector(`.muralModalContainer[data-mural-name="${muralName}"]`)
    modal.classList.add('muralModalContainer-is-shown')
    document.body.classList.add('l-noScroll')
}

function hideMuralModalContainer(event) {
    const modal = event.target.closest('.muralModalContainer')
    modal.classList.remove('muralModalContainer-is-shown')
    document.body.classList.remove('l-noScroll')
}

const thumbnails = document.querySelectorAll('.muralThumbnail')
for (const thumbnail of thumbnails) {
    thumbnail.addEventListener('click', showMuralModalContainer)
}

const closeBtns = document.querySelectorAll('.muralModal--close')
for (const closeBtn of closeBtns) {
    closeBtn.addEventListener('click', hideMuralModalContainer)
}

document.body.addEventListener('keyup', function(e) {
    if (e.key == "Escape") {
        const modal = document.querySelector('.muralModalContainer-is-shown')
        if (modal) {
            modal.classList.remove('muralModalContainer-is-shown')
            document.body.classList.remove('l-noScroll')
        }
    }
})
