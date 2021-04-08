function toggleNavModal() {
    $('#navModal').toggleClass('navModal-is-shown')
    $('body').toggleClass('l-noScroll')
}

$('#hamburger')
    .add('#closeNavModal')
    .add('.navModal--linkList > *')
    .click(toggleNavModal)
