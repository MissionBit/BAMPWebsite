function showMuralModal(event) {
    const name = event.target.closest('.muralThumbnail[data-mural-name]').dataset.muralName
    $(`.muralModalContainer[data-mural-name="${name}"]`)
        .addClass('muralModalContainer-is-shown')
    $('body').addClass('l-noScroll')
}

function hideMuralModal() {
    $('.muralModalContainer-is-shown').removeClass('muralModalContainer-is-shown')
    $('body').removeClass('l-noScroll')
}

$('.muralThumbnail').click(showMuralModal)
$('.muralModal--close').click(hideMuralModal)

$('.muralModalContainer').click(event => {
    const outside = $(event.target).hasClass('muralModalContainer')
    if (!outside) {
        return
    }
    hideMuralModal()
})

$('body').on('keyup', e => {
    if (e.key == "Escape") {
        hideMuralModal()
    }
})
