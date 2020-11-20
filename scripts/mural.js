// function showMuralModalContainer(event) {
//     console.log(event.target)
//     const muralModalContainer = document.getElementById('muralModalContainer')
//     muralModalContainer.classList.add('muralModalContainer-is-shown')
// }

function showMuralModalContainer(event) {
    // console.log(event.target.closest('.muralThumbnail[data-mural-name]'))
    const thumbnail = event.target.closest('.muralThumbnail[data-mural-name]')
    console.log(thumbnail.dataset.muralName)
    const muralName = thumbnail.dataset.muralName
    const modal = document.querySelector(`.muralModal[data-mural-name="${muralName}"]`)
    // console.log(modal)
    const muralModalContainer = document.querySelector
    muralModalContainer.classList.add('muralModalContainer-is-shown')
    // const thumbnail = event.target.closest('.thumbnail')
    // thumbnail.classList.add('muralModalContainer-is-shown')
}

// function hideMuralModalContainer(event) {
//     const muralModalContainer = document.getElementById('muralModalContainer')
//     muralModalContainer.classList.remove('muralModalContainer-is-shown')
// }

const thumbnails = document.querySelectorAll('.muralThumbnail')
// console.log(thumbnails)
for (const thumbnail of thumbnails) {
    thumbnail.addEventListener('click', showMuralModalContainer)
}

const modal = document.querySelectorAll('.muralModal')
// console.log(modal)

// const closeBtns = document.querySelectorAll('.closeMuralModal')
// closeBtns.addEventListener('click', hideMuralModalContainer)
