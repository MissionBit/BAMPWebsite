function showMuralGallery() {
    console.log('happy')
    const muralGallery = document.getElementById('muralGallery')
    muralGallery.classList.add('muralGallery-is-shown')
}

const showMore = document.getElementById('muralGallerySlider')
showMore.addEventListener('click', showMuralGallery)
