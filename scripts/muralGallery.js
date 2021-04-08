// TODO: test after restoring

function toggleGallery(event) {
    $('#muralGallery').toggleClass('muralGallery-is-hidden')
    if (event.target.innerHTML === "&#10095;") {
        event.target.innerHTML = "&#10094;"
    } else {
        event.target.innerHTML = "&#10095;"
    }
}

$('#muralGallerySlider').click(showGallery)
