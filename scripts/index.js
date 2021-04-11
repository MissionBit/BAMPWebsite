import './vendor/jquery-3.6.0.slim.min.js'
import './instaFeed.js'

/*
 * restore animations once dom has settled
 */
$(document).ready(() => {
    $('body').removeClass("u-preload")
})


/*
 * show/hide nav modal
 */
$('#hamburger').add('#closeNavModal').add('.navModal--linkList > *')
    .click(() => {
        $('#navModal').toggleClass('navModal-is-shown')
        $('body').toggleClass('l-noScroll')
    })


/*
 * show/hide faq answers
 */
$('.faq--questionBox').click(event => {
    $(event.target).closest('.faq').toggleClass('faq-is-open')
    event.preventDefault()
})


/*
 * jump to email form from "get updates"
 */
$('.getUpdates').click(() => {
    $('.emailForm--inputBox').focus()
})


/*
 * show/hide mural modal
 */
function showMuralModal(event) {
    const name = event.target.closest('.muralThumbnail[data-mural-name]').dataset.muralName
    $(`.muralModalContainer[data-mural-name="${name}"]`).addClass('muralModalContainer-is-shown')
    $('body').addClass('l-noScroll')
}

function hideMuralModal() {
    $('.muralModalContainer-is-shown').removeClass('muralModalContainer-is-shown')
    $('body').removeClass('l-noScroll')
}

$('.muralThumbnail').click(showMuralModal)
$('.muralModal--close').click(hideMuralModal)
$('.muralModalContainer').click(hideMuralModal).children().click(() => { return false })
$(document).on('keyup', e => { e.key === "Escape" ? hideMuralModal() : null })


/*
 * mural gallery
 */
$('#muralGallerySlider').click(event => {
    $('#muralGallery').toggleClass('muralGallery-is-hidden')
    if (event.target.innerHTML === "&#10095;") {
        event.target.innerHTML = "&#10094;"
    } else {
        event.target.innerHTML = "&#10095;"
    }
})
