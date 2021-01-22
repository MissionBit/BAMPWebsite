function showMuralGallery(event) {
    const muralGallery = document.getElementById('muralGallery')
    muralGallery.classList.remove('muralGallery-is-hidden')
    event.target.innerHTML = "&#10095;"
    showMore.addEventListener('click', hideMuralGallery, {"once": true})
    // let muralGalleryText = document.getElementById('muralGalleryText').innerHTML
    // let changeMuralGalleryText = muralGalleryText.replace("Show More", "Hide")
    // document.getElementById("muralGalleryText").innerHTML = changeMuralGalleryText
}

function hideMuralGallery(event) {
    const muralGallery = document.getElementById('muralGallery')
    muralGallery.classList.add('muralGallery-is-hidden')
    event.target.innerHTML = "&#10094;"
    showMore.addEventListener('click', showMuralGallery, {"once": true})
    // let muralGalleryText = document.getElementById('muralGalleryText').innerHTML
    // let changeMuralGalleryText = muralGalleryText.replace("Hide", "Show More")
    // document.getElementById("muralGalleryText").innerHTML = changeMuralGalleryText
}

const showMore = document.getElementById('muralGallerySlider')
showMore.addEventListener('click', showMuralGallery, {"once": true})
